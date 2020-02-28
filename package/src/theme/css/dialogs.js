import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { fade, darken } from "@material-ui/core/styles/colorManipulator";
import defaultTheme from "@material-ui/core/styles/defaultTheme";
import palette from "../palette";
import colors from "../colors";
import variables from "../variables";
import shadows from "../shadows";

const pressShadow = `0 0 0 1px ${fade(palette.text.primary, 0.4)}, inset 0 0 0 100px ${palette.action.active}`;

const dialogs = {
  MuiBackdrop: {
    root: {
      backgroundColor: fade(palette.text.primary, 0.5),
    }
  },
  MuiDialog: {
    paper: {
      overflowY: undefined
    },
    scrollPaper: {
      alignItems: "flex-start",
      justifyContent: "flex-end"
    },
    paperWidthXs: {
      maxWidth: 320,
      '&$paperScrollBody': {
        [variables.breakpoints.down(320 + 32 * 2)]: {
          maxWidth: 'calc(100% - 64px)',
        },
      },
    },
  },
  MuiDialogTitle: {
    root: {
      padding: defaultTheme.spacing(2),
      background: palette.background.card.header,
      boxShadow: `0 1px ${palette.divider}`,
      borderTopLeftRadius: variables.shape.borderRadiusLarge,
      borderTopRightRadius: variables.shape.borderRadiusLarge,
    }
  },
  MuiDialogContent: {
    root: {
      padding: defaultTheme.spacing(2),
      background: palette.background.card.body,
      "&:last-child": {
        borderBottomLeftRadius: variables.shape.borderRadiusLarge,
        borderBottomRightRadius: variables.shape.borderRadiusLarge,
      }
    }
  },
  MuiDialogContentText: {
    root: {
      marginBottom: undefined
    }
  },
  MuiDialogActions: {
    root: {
      position: "relative",
      padding: defaultTheme.spacing(2),
      background: palette.background.card.header,
      boxShadow: `0 -1px ${palette.divider}`,
      borderBottomLeftRadius: variables.shape.borderRadiusLarge,
      borderBottomRightRadius: variables.shape.borderRadiusLarge,
    }
  },
  MuiDrawer: {
    paper: {
      overflowY: undefined,
      background: palette.background.card.header
    },
    paperAnchorRight: {
      width: variables.breakpoints.values.sm
    },
  },
}

export default dialogs;
