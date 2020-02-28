import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { fade, darken } from "@material-ui/core/styles/colorManipulator";
import defaultTheme from "@material-ui/core/styles/defaultTheme";
import palette from "../palette";
import colors from "../colors";
import variables from "../variables";
import shadows from "../shadows";

const pressShadow = `0 0 0 1px ${fade(palette.text.primary, 0.4)}, inset 0 0 0 100px ${palette.action.active}`;

const tabs = {
  MuiTabs: {
    root: {
      boxShadow: `inset 0 -1px ${palette.divider}`
    },
    indicator: {
      height: 4,
      backgroundColor: "transparent",
      "&:after": {
        content: '""',
        display: "block",
        height: 4,
        backgroundColor: palette.primary.main,
        borderTopLeftRadius: variables.shape.borderRadius,
        borderTopRightRadius: variables.shape.borderRadius,
        marginLeft: defaultTheme.spacing(2),
        marginRight: defaultTheme.spacing(2),
      }
    }
  },
  MuiTab: {
    root: {
      height: variables.shape.actionHeight,
      textTransform: "initial",
      padding: [[0, defaultTheme.spacing(2)]],
      boxSizing: "border-box",
      minWidth: undefined,
      [variables.breakpoints.up('sm')]: {
        fontSize: undefined,
        minWidth: undefined,
      },
      "&:first-child": {
        marginLeft: defaultTheme.spacing(-2)
      }
    },
    textColorPrimary: {
      "&:hover": {
        color: palette.text.primary
      },
      "&$selected:hover": {
        color: palette.primary.main
      }
    }
  },
}

export default tabs;
