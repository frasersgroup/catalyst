import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import defaultTheme from "@material-ui/core/styles/defaultTheme";

import palette from "./palette";
import shadows from "./shadows";
import props from "./props";
import typography from "./typography";
import variables from "./variables";
import css from "./css";

const toolbarHeight = 80;
const toolbarMobileHeight = 54;

// Spacing
export const defaultSpacingUnit = 8;
export const drawerWidth = 280;
export const detailDrawerWidth = 400;

export const rawMuiTheme = {
  palette,
  typography,
  shadows: shadows.array,
  shape: variables.shape,
  dimensions: {
    drawerWidth,
    detailDrawerWidth
  },
  mixins: {
    leadingPaddingWhenPrimaryDrawerIsOpen: {
      paddingLeft: drawerWidth + (defaultSpacingUnit * 2)
    },
    trailingPaddingWhenDetailDrawerIsOpen: {
      paddingRight: detailDrawerWidth + (defaultSpacingUnit * 2)
    },
  },
  props,
  overrides: css,
  breakpoints: variables.breakpoints
};
console.log(rawMuiTheme)
export default createMuiTheme(rawMuiTheme);
