import React from "react";
import PropTypes from "prop-types";
import {
  Avatar as MuiAvatar,
  makeStyles
} from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    position: "relative",
    boxShadow: `0 1px 2px ${fade(theme.palette.text.primary, 0.1)}, 0 4px 8px -4px ${fade(theme.palette.text.primary, 0.1)}`,
    borderRadius: theme.shape.borderRadius,
    "&:after": {
      content: "''",
      display: "block",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      border: `1px solid ${fade(theme.palette.text.primary, 0.2)}`,
      borderRadius: theme.shape.borderRadius,
    }
  },
  small: {
    width: 28,
    height: 28
  },
  medium: {
    width: 44,
    height: 44,
  },
  large: {
    width: 72,
    height: 72,
  },
  avatar: {
    width: "100%",
    height: "100%"
  }
}));

/**
 * @name Avatar
 * @param {Object} props Component props
 * @returns {React.Component} returns a React component
 */
const Avatar = React.forwardRef(function Avatar(props, ref) {
  const { size, ...otherProps } = props;
  const classes = useStyles();

  const wrapperClass = clsx({
    [classes.wrapper]: true,
    [classes.small]: size === "small",
    [classes.medium]: size === "medium",
    [classes.large]: size === "large",
  });

  return (
    <div className={wrapperClass}>
      <MuiAvatar
        className={classes.avatar}
        {...otherProps}
      />
    </div>
  );
});

Avatar.propTypes = {
  /**
   * The size of the component
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Avatar.defaultProps = {
  size: "small",
};

export default Avatar;
