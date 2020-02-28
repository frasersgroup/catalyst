import React from "react";
import PropTypes from "prop-types";
import { KeyboardShortcut as MuiKeyboardShortcut } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  keyboardShortcut: {
    background: theme.palette.background.card.body,
    boxShadow: theme.shadows[4],
    padding: theme.spacing.unit / 2,
    borderRadius: theme.shape.borderRadius,
    font: "inherit",
    whiteSpace: "nowrap"
  },
}));

/**
 * @name Chip
 * @param {Object} props Component props
 * @returns {React.Component} returns a React component
 */
function KeyboardShortcut(props) {
  const { children } = props;
  const classes = useStyles();

  return (
    <kbd className={classes.keyboardShortcut}>
      {children}
    </kbd>
  );
};

export default KeyboardShortcut;
