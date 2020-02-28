import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { fade } from "@material-ui/core/styles/colorManipulator";
import classNames from "classnames";
import {
  ButtonBase,
  Typography
} from "@material-ui/core";
import InfoOutlineIcon from '@material-ui/icons/InfoOutlined';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutlined';
import ErrorIcon from '@material-ui/icons/Error';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const styles = theme => ({
  alert: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: [[theme.spacing(0.75), theme.spacing(1.5)]],
    borderRadius: theme.shape.borderRadius,
  },
  info: {
    background: fade(theme.palette.info.main, 0.2),
    "& $icon, & $action": {
      color: theme.palette.info.main
    }
  },
  success: {
    background: fade(theme.palette.success.main, 0.2),
    "& $icon, & $action": {
      color: theme.palette.success.main
    }
  },
  warning: {
    background: fade(theme.palette.warning.main, 0.2),
    "& $icon, & $action": {
      color: theme.palette.warning.dark
    }
  },
  danger: {
    background: fade(theme.palette.error.main, 0.2),
    "& $icon, & $action": {
      color: theme.palette.error.main
    }
  },
  alternate: {
    background: "white",
    boxShadow: theme.shadows[1],
  },
  icon: {
    flexShrink: 0,
    alignSelf: "flex-start",
    marginLeft: theme.spacing(-0.5),
    marginRight: theme.spacing(1),
    "& > svg": {
      display: "block"
    }
  },
  text: {
    textAlign: "left"
  },
  action: {
    display: "flex",
    font: "inherit",
    marginLeft: theme.spacing(1),
    "&:hover": {
      textDecoration: "underline"
    }
  }
});

@withStyles(styles)
export default class Banner extends Component {
  static propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    icon: PropTypes.object,
    status: PropTypes.string
  };

  static defaultProps = {
    status: "info"
  };

  render() {
    const { classes, children, plain, alternate, customIcon, status, action } = this.props;

    const alertClasses = classNames(
      classes.alert,
      status === "info" && classes.info,
      status === "success" && classes.success,
      status === "warning" && classes.warning,
      status === "danger" && classes.danger,
      alternate && classes.alternate
    );

    let icon = null;
    if (!plain) {
      if (customIcon) {
        icon = customIcon;

      } else if (status === "info") {
        icon = <InfoOutlineIcon fontSize="small" />;
     
      } else if (status === "success") {
        icon = <CheckCircleOutlineIcon fontSize="small" />; 

      } else if (status === "danger" || status === "warning") {
        icon = <ErrorOutlineIcon fontSize="small" />;

      }
    }

    const iconMarkup = icon ? (
      <div className={classes.icon}>{icon}</div>
    ) : null;

    const actionMarkup = action ? (
      <Typography variant="body1"component="div">
        <ButtonBase className={classes.action} onClick={action.onClick}>
          {action.label}
        </ButtonBase>
      </Typography>
    ) : null;

    return (
      <div className={alertClasses}>
        {iconMarkup}

        <Typography variant="body1" className={classes.text} component="div">
          {children}
        </Typography>

        {actionMarkup}
      </div>
    );
  }
}
