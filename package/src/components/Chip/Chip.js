import React from "react";
import PropTypes from "prop-types";
import { fade } from "@material-ui/core/styles/colorManipulator";
import { Chip as MuiChip, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  info: {
    color: theme.palette.info.main,
    backgroundColor: fade(theme.palette.info.main, 0.2),
  },
  success: {
    color: theme.palette.success.main,
    backgroundColor: fade(theme.palette.success.main, 0.2),
  },
  warning: {
    color: theme.palette.warning.main,
    backgroundColor: fade(theme.palette.warning.main, 0.2),
  },
  danger: {
    color: theme.palette.error.main,
    backgroundColor: fade(theme.palette.error.main, 0.2),
  },
}));

/**
 * @name Chip
 * @param {Object} props Component props
 * @returns {React.Component} returns a React component
 */
const Chip = React.forwardRef(function Chip(props, ref) {
  const { status, ...otherProps } = props;
  const classes = useStyles();

  const colorVariants = clsx({
    [classes.info]: status === "info",
    [classes.success]: status === "success",
    [classes.warning]: status === "warning",
    [classes.danger]: status === "danger",
  });

  return (
    <MuiChip
      color={status === "error" ? "secondary" : undefined}
      classes={{
        root: colorVariants
      }}
      ref={ref}
      // eslint-disable-next-line react/jsx-indent-props
      {...otherProps}
    />
  );
});

Chip.propTypes = {
  /**
   * CSS Classes
   */
  classes: PropTypes.object,
  /**
   * The status of the component
   */
  status: PropTypes.oneOf(["default", "info", "success", "warning", "danger", "error"]),
};

Chip.defaultProps = {
  status: "default",
};

export default Chip;
