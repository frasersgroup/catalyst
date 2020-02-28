import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { fade, darken } from "@material-ui/core/styles/colorManipulator";
import defaultTheme from "@material-ui/core/styles/defaultTheme";
import palette from "../palette";
import colors from "../colors";
import variables from "../variables";
import shadows from "../shadows";

const buttons = {
  // Buttons
  MuiButton: {
    root: {
      height: variables.shape.actionHeight,
      padding: [[0, defaultTheme.spacing(1.5)]],
      transition: undefined,
      minWidth: undefined,
      whiteSpace: "nowrap",
      "&$focusVisible": {
        outline: "none",
        boxShadow: [[shadows.focus], "!important"],
      },
    },
    contained: {
      color: undefined,
      backgroundColor: "white",
      "&:hover": {
        background: `linear-gradient(to bottom, white 0%, ${palette.grey[50]} 100%)`,
        boxShadow: shadows.array[3]
      },
      "&:hover:active": {
        boxShadow: undefined,
      },
      "&:active": {
        backgroundColor: undefined,
        background: [[palette.grey[100]], "!important"],
        boxShadow: [[shadows.press], "!important"],
      },
      "&$disabled": {
        color: palette.text.secondary,
        backgroundColor: palette.grey[200],
        boxShadow: shadows.array[1]
      },
    },
    containedPrimary: {
      boxShadow: `${shadows.array[2]}, 0 0 0 1px ${palette.primary.main}`,
      "&:hover": {
        background: `linear-gradient(to bottom, ${palette.primary.main} 0%, ${darken(palette.primary.main, 0.15)} 100%)`,
        boxShadow: `${shadows.array[3]}, 0 0 0 1px ${darken(palette.primary.main, 0.15)}`
      },
      "&:hover:active": {
        boxShadow: undefined,
      },
      "&:active": {
        backgroundColor: undefined,
        background: [[darken(palette.primary.main, 0.3)], "!important"],
        boxShadow: [[`${shadows.press}, 0 0 0 1px ${darken(palette.primary.main, 0.3)}`], "!important"],
      },
    },
    containedSecondary: {
      color: palette.secondary.main,
      backgroundColor: "white",
      "&:hover, &:active": {
        color: defaultTheme.palette.common.white,
      },
      "&:hover": {
        background: `linear-gradient(to bottom, ${palette.secondary.main} 0%, ${darken(palette.secondary.main, 0.15)} 100%)`,
        boxShadow: `${shadows.array[3]}, 0 0 0 1px ${darken(palette.secondary.main, 0.15)}`
      },
      "&:active": {
        backgroundColor: undefined,
        background: [[darken(palette.secondary.main, 0.3)], "!important"],
        boxShadow: [[`${shadows.press}, 0 0 0 1px ${darken(palette.secondary.main, 0.3)}`], "!important"],
      },
    },
    text: {
      padding: undefined,
      "&:active": {
        backgroundColor: fade(palette.text.primary, 0.2)
      }
    },
    textPrimary: {
      "&:active": {
        backgroundColor: fade(palette.primary.main, 0.2)
      }
    },
    textSecondary: {
      color: palette.text.secondary,
      "&:hover": {
        color: palette.text.primary,
        backgroundColor: undefined
      },
      "&:active": {
        backgroundColor: undefined,
      }
    },
    startIcon: {
      marginRight: defaultTheme.spacing(0.5)
    },
    endIcon: {
      marginLeft: defaultTheme.spacing(0.5)
    }
  },
  MuiButtonGroup: {
    groupedContained: {
      "&:not(:last-child)": {
        borderRight: `1px solid ${colors.white}`
      }
    },
    groupedContainedPrimary: {
      "&:not(:last-child)": {
        borderRight: `1px solid ${colors.white}`
      }
    },
    groupedContainedSecondary: {
      "&:not(:last-child)": {
        borderRight: `1px solid ${colors.white}`
      }
    }
  },
  MuiIconButton: {
    root: {
      color: undefined
    }
  }
}

export default buttons;
