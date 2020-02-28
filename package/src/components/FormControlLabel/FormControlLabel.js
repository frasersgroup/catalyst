import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { fade, darken } from "@material-ui/core/styles/colorManipulator";
import {
  FormControlLabel as MuiFormControlLabel,
  makeStyles
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "flex-start",
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5)
  },
  label: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginLeft: theme.spacing(1),
  },
  detail: {
    color: theme.palette.text.secondary
  },
  disabled: {
    pointerEvents: "none",
    "& $detail": {
      color: "inherit"
    }
  },
}));

/**
 * @name FormControlLabel
 * @param {Object} props Component props
 * @returns {React.Component} returns a React component
 */
const FormControlLabel = React.forwardRef(function FormControlLabel(props, ref) {
  const { label, detail, detailPosition, ...otherProps } = props;
  const classes = useStyles();

  const labelMarkup = (
    <Fragment>
      <span>{label}</span>
      {detail && <span className={classes.detail}>{detail}</span>}
    </Fragment>
  );

  return (
    <MuiFormControlLabel
      classes={{
        label: classes.label,
        root: classes.root,
        disabled: classes.disabled
      }}
      label={labelMarkup}
      {...otherProps}
    />
  );
});

FormControlLabel.propTypes = {
  /**
   * The size of the component
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

FormControlLabel.defaultProps = {
  detailPosition: "stacked",
};

export default FormControlLabel;
