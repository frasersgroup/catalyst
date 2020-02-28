import React from "react";
import PropTypes from "prop-types";
import { TextField as MuiTextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  horizontal: {
    flexDirection: "row",
    "& $inputLabel": {
      flexBasis: "30%",
      marginTop: 6,
      marginBottom: 0,
      paddingRight: theme.spacing(2),
      textAlign: "right"
    },
    "& $input": {
      flexBasis: "40%",
    },
    "& $helperText": {
      marginTop: 6,
      flexBasis: "30%",
      paddingLeft: theme.spacing(2)
    },
  },
  minimal: {
    display: "inline-flex",
    "& $input": {
      background: "none", 
    },
    "& $notchedOutline": {
      boxShadow: "none"
    },
    "&:hover, &:focus": {
      background: "white"
    }
  },
  helperText: {
  },
  input: {
  },
  inputLabel: {
  },
  notchedOutline: {
  },
  inputInput: {
  }
}));

/**
 * @name Chip
 * @param {Object} props Component props
 * @returns {React.Component} returns a React component
 */
const TextField = React.forwardRef(function TextField(props, ref) {
  const { horizontal, minimal, FormHelperTextProps, InputProps, InputLabelProps, ...otherProps } = props;
  const classes = useStyles();

  const textfieldClassNames = clsx({
    [classes.horizontal]: horizontal,
    [classes.minimal]: minimal
  });

  return (
    <MuiTextField
      className={textfieldClassNames}
      ref={ref}
      FormHelperTextProps={{
        ...FormHelperTextProps,
        classes: {
          root: classes.helperText
        }
      }}
      InputProps={{
        ...InputProps,
        classes: {
          root: classes.input,
          input: classes.inputInput,
          notchedOutline: classes.notchedOutline
        }
      }}
      InputLabelProps={{
        ...InputLabelProps,
        classes: {
          root: classes.inputLabel
        }
      }}
      {...otherProps}
    />
  );
});

export default TextField;
