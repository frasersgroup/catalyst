import React from "react";
import PropTypes from "prop-types";
import {
  Typography,
  Link,
  Tooltip,
  makeStyles
} from "@material-ui/core";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import SettingsIcon from '@material-ui/icons/Settings';
import LockIcon from '@material-ui/icons/Lock';
import WidgetsIcon from '@material-ui/icons/Widgets';
import Chip from "../Chip";

const useStyles = makeStyles((theme) => ({
  flex: {
    display: "flex",
    alignItems: "center"
  },
  icon: {
    fontSize: 16,
    marginLeft: theme.spacing(0.5)
  }
}));

/**
 * @name DataField
 * @param {Object} props Component props
 * @returns {React.Component} returns a React component
 */
const DataField = React.forwardRef(function DataField(props, ref) {
  const {
    children,
    label,
    labelHidden,
    value,
    style,
    status,
    to,
  } = props;
  const classes = useStyles();

  const labelMarkup = label ? (
    <Typography color="textSecondary" variant={labelHidden ? "srOnly" : undefined}>
      <label>
        {label}
      </label>
    </Typography>
  ) : null;

  let iconMarkup = null;
  if (style === "inherited") {
    iconMarkup = (
      <Tooltip title="Inherited from child">
        <ArrowUpwardIcon className={classes.icon} />
      </Tooltip>
    );
  } else if (style === "default") {
    iconMarkup = (
      <Tooltip title="Using default settings">
        <SettingsIcon className={classes.icon} />
      </Tooltip>
    );
  } else if (style === "lock") {
    iconMarkup = (
      <Tooltip title="Locked">
        <LockIcon className={classes.icon} />
      </Tooltip>
    );
  } else if (style === "plugin") {
    iconMarkup = (
      <Tooltip title="Set by plugin">
        <WidgetsIcon className={classes.icon} />
      </Tooltip>
    );
  }

  let valueMarkup = null;
  if (style) {
    valueMarkup = (
      <Typography color="textSecondary" className={classes.flex}>
        {value}
        {iconMarkup}
      </Typography>
    );
  } else if (to) {
    valueMarkup = (
      <Typography>
        <Link href={to}>
          {value}
        </Link>
      </Typography>
    )
  } else if (status) {
    valueMarkup = (
      <Chip label={value} color={status}/>
    )
  } else if (children) {
    valueMarkup = children;
  } else {
    valueMarkup = (
      <Typography>
        {value}
      </Typography>
    )
  }

  return (
    <div className={classes.wrapper}>
      {labelMarkup}
      {valueMarkup}
    </div>
  );
});

DataField.propTypes = {
  /**
   * CSS Classes
   */
  classes: PropTypes.object,
  /**
   * The color of the component
   */
  style: PropTypes.oneOf(["default", "inherited", "lock", "plugin"]),
  /**
   * The variant to use
   */
  status: PropTypes.oneOf(["info", "success", "warning", "danger"])
};

DataField.defaultProps = {
  labelHidden: false,
  style: undefined,
  status: undefined
};

export default DataField;
