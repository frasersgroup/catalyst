import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  CircularProgress,
  Button as MuiButton,
  Typography,
  makeStyles
} from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
  buttonProgress: {
    marginLeft: theme.spacing()
  },
  exclude: {
    color: theme.palette.secondary.main
  }
}));

/**
 * @name Button
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
const Button = React.forwardRef(function Button(props, ref) {
  const { children, disabled, dropdown, filter, exclude, isWaiting, endIcon, ...otherProps } = props;
  const classes = useStyles();

  const childrenMarkup = filter ? (
    <Fragment>
      <span className={exclude ? classes.exclude : undefined}>{exclude && "Exclude "}{filter}</span>
      <Typography>&nbsp;· {children}</Typography>
    </Fragment>
  ) : children;

  const endIconMarkup = filter || dropdown ? <ArrowDropDownIcon /> : endIcon;

  return (
    <MuiButton
      disabled={disabled || isWaiting}
      ref={ref}
      endIcon={endIconMarkup}
      {...otherProps}
    >
      {childrenMarkup}
      {isWaiting && <CircularProgress color="inherit" size={16} className={classes.buttonProgress} />}
    </MuiButton>
  );
});

Button.propTypes = {
  /**
   * The content of the Button
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * Options: `default` | `inherit` | `primary` | `secondary` | `error`
   */
  color: PropTypes.string,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool, // eslint-disable-line
  /**
   * If `true`, the CircularProgress will be displayed and the button will be disabled.
   */
  isWaiting: PropTypes.bool,
  /**
   * onClick callback
   */
  onClick: PropTypes.func
};

export default Button;
