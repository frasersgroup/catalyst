import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { fade, darken } from "@material-ui/core/styles/colorManipulator";
import defaultTheme from "@material-ui/core/styles/defaultTheme";
import palette from "../palette";
import colors from "../colors";
import variables from "../variables";
import shadows from "../shadows";

const TAB_PADDING = 1.5;

const tabs = {
  MuiTabs: {
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
        marginLeft: defaultTheme.spacing(TAB_PADDING),
        marginRight: defaultTheme.spacing(TAB_PADDING),
      }
    }
  },
  MuiTab: {
    root: {
      height: variables.shape.actionHeight,
      textTransform: "initial",
      padding: [[0, defaultTheme.spacing(TAB_PADDING)]],
      boxSizing: "border-box",
      minWidth: undefined,
      [variables.breakpoints.up('sm')]: {
        fontSize: undefined,
        minWidth: undefined,
      },
      "&:first-child": {
        marginLeft: defaultTheme.spacing(-TAB_PADDING)
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
