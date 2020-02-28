import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import defaultTheme from "@material-ui/core/styles/defaultTheme";
import colors from "./colors";
import breakpoints from "./variables/breakpoints";

const toolbarHeight = 80;
const toolbarMobileHeight = 54;

// Colors
export const colorPrimaryMain = colors.coolGrey;
export const colorSecondaryMain = colors.reactionBlue;

// Spacing
export const defaultSpacingUnit = 8;
export const drawerWidth = 280;
export const detailDrawerWidth = 400;

// Shapes
const shape = {
  borderRadius: 4,
  borderRadiusLarge: 8,
  borderRadiusSmall: 2,
  actionHeight: 30
}

// Typography
const typography = {
  fontSize: 14,
  fontFamily: "Roboto, -apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Helvetica Neue, sans-serif",
  fontWeightLight: 400,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 500,
}
typography.body = {
  fontSize: 14,
  lineHeight: 1.43,
  letterSpacing: 0.3,
  fontWeight: typography.fontWeightRegular
}
typography.longform = {
  fontSize: typography.body.fontSize,
  lineHeight: 1.58,
  letterSpacing: typography.body.letterSpacing,
  fontWeight: typography.fontWeightRegular
}
typography.button = {
  fontSize: typography.body.fontSize,
  lineHeight: 1.43,
  letterSpacing: typography.body.letterSpacing,
  fontWeight: typography.fontWeightBold,
  textTransform: "none"
}
typography.caption = {
  fontSize: 12,
  lineHeight: 1.34,
  letterSpacing: 0.4,
  fontWeight: typography.fontWeightRegular
}
typography.h1 = {
  fontSize: 32,
  lineHeight: 1.34,
  fontWeight: typography.fontWeightRegular
}
typography.h2 = {
  fontSize: 24,
  lineHeight: 1.34,
  fontWeight: typography.fontWeightRegular
}
typography.h3 = {
  fontSize: 20,
  lineHeight: 1.2,
  letterSpacing: 0.1,
  fontWeight: typography.fontWeightRegular
}
typography.h4 = {
  fontSize: 17,
  lineHeight: 1.43,
  letterSpacing: 0.2,
  fontWeight: typography.fontWeightRegular
}
typography.h5 = {
  fontSize: 12,
  lineHeight: 1.34,
  letterSpacing: 0.4,
  fontWeight: typography.fontWeightBold,
  textTransform: "uppercase"
}

const variables = {
  breakpoints,
  typography,
  shape,
};

export default variables;