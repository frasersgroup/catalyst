import React from "react";
import PropTypes from "prop-types";
import {
  ButtonBase,
  makeStyles
} from "@material-ui/core";
import clsx from "clsx";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Checkbox from "../Checkbox";

const useStyles = makeStyles((theme) => ({
  wrapper: {
  },
  icon: {
    color: theme.palette.text.secondary,
    marginRight: 2,
    transform: "rotate(-90deg)"
  },
  iconPlaceholder: {
    width: 24,
    marginRight: 2
  },
  expanded: {
    "& > $branch > $button > $icon": {
      transform: "rotate(0deg)"
    },
    "& > $children": {
      display: "block"
    }
  },
  branch: {
    display: "flex",
    alignItems: "center",
    minHeight: theme.shape.actionHeight,
  },
  button: {
    display: "flex",
    alignItems: "center",
    font: "inherit",
    letterSpacing: theme.typography.body1.letterSpacing,
    minHeight: theme.shape.actionHeight,
  },
  label: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
  },
  checkbox: {
    display: "flex",
    alignItems: "center",
    marginRight: theme.spacing(1)
  },
  children: {
    display: "none",
    paddingLeft: theme.spacing(2.5)
  }
}));

/**
 * @name Avatar
 * @param {Object} props Component props
 * @returns {React.Component} returns a React component
 */
const TreeItem = React.forwardRef(function TreeItem(props, ref) {
  const { label, checkable, checkboxProps, children, expanded, ...otherProps } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(expanded);

  /**
   * Toggle branch open
   * @returns {undefined}
   */
  function handleToggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  const wrapperClasses = clsx({
    [classes.wrapper]: true,
    [classes.expanded]: open,
  });

  const iconMarkup = children ? (
    <ButtonBase className={classes.button} onClick={handleToggle}>
      <ArrowDropDownIcon className={classes.icon} />
    </ButtonBase>
  ) : <div className={classes.iconPlaceholder} />;

  const checkboxMarkup = checkable ? <div className={classes.checkbox}><Checkbox {...checkboxProps} /></div> : null;

  return (
    <div className={wrapperClasses}>
      <div className={classes.branch}>
        {iconMarkup}
        <label className={classes.label} {...otherProps}>
          {checkboxMarkup}
          {label}
        </label>
      </div>
      <div className={classes.children}>
        {children}
      </div>
    </div>
  );
});

TreeItem.propTypes = {
  /**
   * The size of the component
   */
  expanded: PropTypes.bool,
};

TreeItem.defaultProps = {
  expanded: false
};

export default TreeItem;
