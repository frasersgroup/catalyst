import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  message: {
    padding: "8px 0"
  },
  title: {
    padding: "8px 0 0 0",
    fontWeight: theme.typography.fontWeightSemiBold
  },
  action: {
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    paddingLeft: 16,
    marginRight: -8
  },
  success: {
    fontSize: theme.typography.fontSize,
    backgroundColor: theme.palette.colors.forestGreenBackground,
    color: theme.palette.colors.forestGreen600,
    border: `2px solid ${theme.palette.colors.forestGreenBorder}`,
    padding: "8px 16px",
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    flexDirection: "column",
    minWidth: 288
  },
  error: {
    fontSize: theme.typography.fontSize,
    backgroundColor: theme.palette.colors.redBackground,
    color: theme.palette.colors.red600,
    border: `2px solid ${theme.palette.colors.redBorder}`,
    padding: "8px 16px",
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    flexDirection: "column",
    minWidth: 288
  },
  info: {
    fontSize: theme.typography.fontSize,
    backgroundColor: theme.palette.colors.reactionBlueBackground,
    color: theme.palette.colors.reactionBlue600,
    border: `2px solid ${theme.palette.colors.reactionBlueBorder}`,
    padding: "8px 16px",
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    flexDirection: "column",
    minWidth: 288
  },
  warning: {
    fontSize: theme.typography.fontSize,
    backgroundColor: theme.palette.colors.yellowBackground,
    color: theme.palette.colors.yellow600,
    border: `2px solid ${theme.palette.colors.yellowBorder}`,
    padding: "8px 16px",
    borderRadius: theme.shape.borderRadius,
    display: "flex",
    flexDirection: "column",
    minWidth: 288
  }
}));

/**
 * @name ToastWrapper
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
export default function ToastWrapper(props) {
  const { className, message, variant, title, action, ...otherProps } = props;
  const classes = useStyles();

  return (
    <Paper
      component={Typography}
      role="alertdialog"
      square
      elevation={6}
      className={clsx(classes[variant], className)}
      message={message}
      title={title}
      {...otherProps}
    >
      { title ? <Typography variant="h4" component="div" className={classes.title}>{title}</Typography> : null }
      <div className={classes.message}>{message}</div>
      {action ? <div className={classes.action}>{action}</div> : null }
    </Paper>
  );
}

ToastWrapper.propTypes = {
  action: PropTypes.node,
  className: PropTypes.string,
  message: PropTypes.string,
  title: PropTypes.string,
  variant: PropTypes.oneOf(["error", "info", "success", "warning"]).isRequired
};
