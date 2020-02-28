import React from "react";
import PropTypes from "prop-types";
import { fade, darken } from "@material-ui/core/styles/colorManipulator";
import {
  Checkbox as MuiCheckbox,
  makeStyles
} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 2,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  base: {
    borderRadius: 3,
    width: 16,
    height: 16,
    backgroundColor: "white",
    boxShadow: theme.shadows[2],
    '$root.Mui-focusVisible &': {
      outline: '2px auto rgba(19,124,189,.6)',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      background: `linear-gradient(to bottom, white 0%, ${theme.palette.grey[50]} 100%)`,
      boxShadow: theme.shadows[3],
    },
    'input:active ~ &': {
      background: [[theme.palette.grey[100]], "!important"],
    },
    'input:disabled ~ &': {
      color: theme.palette.text.secondary,
      backgroundColor: theme.palette.grey[200],
      boxShadow: theme.shadows[1],
    },
  },
  default: {
    "&$checked": {
      backgroundColor: theme.palette.primary.main,
      boxShadow: `${theme.shadows[2]}, 0 0 0 1px ${theme.palette.primary.main}`,
      'input:hover ~ &': {
        background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ${darken(theme.palette.primary.main, 0.3)} 100%)`,
        boxShadow: `${theme.shadows[3]}, 0 0 0 1px ${darken(theme.palette.primary.main, 0.3)}`
      },
      'input:active ~ &': {
        background: [[darken(theme.palette.primary.main, 0.3)], "!important"],
      },
    }
  },
  secondary: {
    "&$checked": {
      backgroundColor: theme.palette.secondary.main,
      boxShadow: `${theme.shadows[2]}, 0 0 0 1px ${theme.palette.secondary.main}`,
      'input:hover ~ &': {
        background: `linear-gradient(to bottom, ${theme.palette.secondary.main} 0%, ${darken(theme.palette.secondary.main, 0.3)} 100%)`,
        boxShadow: `${theme.shadows[3]}, 0 0 0 1px ${darken(theme.palette.secondary.main, 0.3)}`
      },
      'input:active ~ &': {
        background: [[darken(theme.palette.secondary.main, 0.3)], "!important"],
      },
    }
  },
  preview: {
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      content: '""',
    },
    "&$default": {
      boxShadow: `${theme.shadows[2]}, 0 0 0 1px ${theme.palette.primary.main}, 0 0 0 5px ${fade(theme.palette.primary.main, 0.25)}`,
      'input:hover ~ &': {
        background: `linear-gradient(to bottom, white 0%, ${theme.palette.grey[50]} 100%)`,
        boxShadow: `${theme.shadows[3]}, 0 0 0 1px ${theme.palette.primary.main}, 0 0 0 5px ${fade(theme.palette.primary.main, 0.25)}`,
      },
      '&:before': {
        backgroundImage:
          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
          " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
          "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23007DB8'/%3E%3C/svg%3E\")",
      },
      "&$checked": {
        // background: "red",
        background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ${darken(theme.palette.primary.main, 0.3)} 100%)`,
        boxShadow: `inset 0 0 0 1px white, ${theme.shadows[3]}, 0 0 0 1px ${darken(theme.palette.primary.main, 0.3)}, 0 0 0 5px ${fade(theme.palette.primary.main, 0.25)}`,
        'input:hover ~ &': {
          background: `linear-gradient(to bottom, ${theme.palette.primary.main} 0%, ${darken(theme.palette.primary.main, 0.3)} 100%)`,
          boxShadow: `inset 0 0 0 1px white, ${theme.shadows[3]}, 0 0 0 1px ${darken(theme.palette.primary.main, 0.3)}, 0 0 0 5px ${fade(theme.palette.primary.main, 0.25)}`
        },
        '&:before': {
          backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        },
      },
    },
    "&$secondary": {
      boxShadow: `${theme.shadows[2]}, 0 0 0 1px ${theme.palette.secondary.main}`,
      '&:before': {
        backgroundImage:
          "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
          " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
          "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23B7386F'/%3E%3C/svg%3E\")",
      },
      "&$checked": {
        // background: "red",
        background: `linear-gradient(to bottom, ${theme.palette.secondary.main} 0%, ${darken(theme.palette.secondary.main, 0.3)} 100%)`,
        boxShadow: `inset 0 0 0 1px white, ${theme.shadows[3]}, 0 0 0 1px ${darken(theme.palette.secondary.main, 0.3)}`,
        '&:before': {
          backgroundImage:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
            " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
            "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
        },
      },
    },
  },
  checked: {
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      content: '""',
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
    },
    'input:disabled ~ &:before': {
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23577181'/%3E%3C/svg%3E\")",
    },
  },
  indeterminate: {
    '&:before': {
      display: 'block',
      width: 10,
      height: 2,
      background: "white",
      borderRadius: 2,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      margin: "auto",
      content: '""',
    },
    'input:disabled ~ &:before': {
      background: theme.palette.text.secondary
    },
  },
}));

/**
 * @name Checkbox
 * @param {Object} props Component props
 * @returns {React.Component} returns a React component
 */
const Checkbox = React.forwardRef(function Checkbox(props, ref) {
  const { color, preview } = props;
  const classes = useStyles();

  const iconClassNames = clsx({
    [classes.base]: true,
    [classes.preview]: preview,
    [classes.default]: color === "default",
    [classes.secondary]: color === "secondary",
  })

  const checkedClassNames = clsx({
    [classes.base]: true,
    [classes.checked]: true,
    [classes.preview]: preview,
    [classes.default]: color === "default",
    [classes.secondary]: color === "secondary",
  })

  return (
    <MuiCheckbox
      className={classes.root}
      indeterminateIcon={<span className={clsx(checkedClassNames, classes.indeterminate)} />}
      checkedIcon={<span className={clsx(checkedClassNames)} />}
      icon={<span className={iconClassNames} />}
      {...props}
    />
  );
});

Checkbox.propTypes = {
  /**
   * The size of the component
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Checkbox.defaultProps = {
  size: "small",
  color: "default"
};

export default Checkbox;
