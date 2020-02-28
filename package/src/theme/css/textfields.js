import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { fade, darken } from "@material-ui/core/styles/colorManipulator";
import defaultTheme from "@material-ui/core/styles/defaultTheme";
import palette from "../palette";
import colors from "../colors";
import variables from "../variables";
import shadows from "../shadows";

const pressShadow = `0 0 0 1px ${fade(palette.text.primary, 0.4)}, inset 0 0 0 100px ${palette.action.active}`;

const textfields = {
  MuiFormLabel: {
    root: {
      display: "block",
      color: palette.text.primary,
      "&$focused": {
        color: undefined
      },
      "&$error": {
        color: undefined
      },
      "&$disabled": {
        color: palette.text.secondary
      }
    },
  },
  MuiFormControl: {
    root: {
      display: "flex",
      '& label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-webkit-input-placeholder': {
        opacity: [['0.42'], '!important'],
      },
      '& label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-moz-placeholder': {
        opacity: [['0.42'], '!important'], // Firefox 19+
      },
      '& label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input:-ms-input-placeholder': {
        opacity: [['0.42'], '!important'], // IE 11
      },
      '& label[data-shrink=false] + .MuiInputBase-formControl .MuiInputBase-input::-ms-input-placeholder': {
        opacity: [['0.42'], '!important'], // Edge
      },
    }
  },
  MuiFormHelperText: {
    root: {
      fontSize: variables.typography.body.fontSize,
      lineHeight: variables.typography.body.lineHeight,
      letterSpacing: variables.typography.body.letterSpacing,
      "&$disabled": {
        color: palette.text.secondary
      }
    },
    contained: {
      margin: [[defaultTheme.spacing(0.5), 0, 0]],
    }
  },
  MuiInputLabel: {
    outlined: {
      position: "static",
      transform: "none",
      marginBottom: defaultTheme.spacing(0.5),
      fontSize: variables.typography.body.fontSize,
      lineHeight: variables.typography.body.lineHeight,
      letterSpacing: variables.typography.body.letterSpacing,
      pointerEvents: undefined,
    },
  },
  MuiInput: {
    root: {
    },
    formControl: {
      "label + &": {
        marginTop: undefined
      }
    },
  },
  MuiInputBase: {
    root: {
      fontSize: variables.typography.body.fontSize,
      lineHeight: variables.typography.body.lineHeight,
      letterSpacing: variables.typography.body.letterSpacing,
      "&$disabled": {
        backgroundColor: fade(palette.text.primary, 0.1)
      }
    },
    input: {
      display: "flex",
      letterSpacing: "inherit"
    }
  },
  MuiInputAdornment: {
    positionStart: {
      color: palette.text.secondary
    },
  },
  MuiOutlinedInput: {
    notchedOutline: {
      boxShadow: shadows.array[1],
      border: "none",
      top: 0,
      "& legend": {
        display: "none"
      }
      // borderColor: variables.borders.palette.base,
    },
    root: {
      background: "white",
      '&:hover $notchedOutline': {
        boxShadow: shadows.array[2],
        border: "none"
        // borderColor: variables.borders.palette.dark,
      },
      '@media (hover: none)': {
        '&:hover $notchedOutline': {
          // borderColor: variables.borders.palette.base,
        },
      },
      '&$focused $notchedOutline': {
        borderColor: palette.primary.main,
        borderWidth: 1,
        boxShadow: shadows.focus
      },
      '&$error $notchedOutline': {
      },
      '&$disabled $notchedOutline': {
        borderColor: undefined
      },
    },
    input: {
      height: variables.shape.actionHeight,
      padding: [[0, 10, 1]],
      boxSizing: "border-box",
    },
    multiline: {
      padding: [[6, 10, 16]]
    },
    adornedStart: {
      paddingLeft: 10
    }
  },
  MuiSelect: {
    select: {
      paddingBottom: 0
    }
  },
}

export default textfields;
