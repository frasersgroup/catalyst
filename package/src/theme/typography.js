import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import defaultTheme from "@material-ui/core/styles/defaultTheme";
import colors from "./colors";
import shadows from "./shadows";
import props from "./props";
import css from "./css";
import variables from "./variables";
console.log(variables)

const breakpoints = createBreakpoints({});

const typography = {
  fontFamily: variables.typography.fontFamily,
  fontWeightLight: variables.typography.fontWeightLight,
  fontWeightRegular: variables.typography.fontWeightRegular,
  fontWeightMedium: variables.typography.fontWeightMedium,
  fontWeightSemiBold: variables.typography.fontWeightBold,
  fontWeightBold: variables.typography.fontWeightBold,
  useNextVariants: true,
  button: {
    fontSize: variables.typography.button.fontSize,
    letterSpacing: variables.typography.button.letterSpacing,
    lineHeight: variables.typography.button.lineHeight,
    fontWeight: variables.typography.button.fontWeight,
    textTransform: variables.typography.button.textTransform,
  },
  h1: {
    fontSize: variables.typography.h1.fontSize,
    letterSpacing: variables.typography.h1.letterSpacing,
    lineHeight: variables.typography.h1.lineHeight,
    fontWeight: variables.typography.h1.fontWeight
  },
  h2: {
    fontSize: variables.typography.h2.fontSize,
    letterSpacing: variables.typography.h2.letterSpacing,
    lineHeight: variables.typography.h2.lineHeight,
    fontWeight: variables.typography.h2.fontWeight
  },
  h3: {
    fontSize: variables.typography.h3.fontSize,
    letterSpacing: variables.typography.h3.letterSpacing,
    lineHeight: variables.typography.h3.lineHeight,
    fontWeight: variables.typography.h3.fontWeight
  },
  h4: {
    fontSize: variables.typography.h4.fontSize,
    letterSpacing: variables.typography.h4.letterSpacing,
    lineHeight: variables.typography.h4.lineHeight,
    fontWeight: variables.typography.h4.fontWeight
  },
  h5: {
    fontSize: variables.typography.h5.fontSize,
    letterSpacing: variables.typography.h5.letterSpacing,
    lineHeight: variables.typography.h5.lineHeight,
    fontWeight: variables.typography.h5.fontWeight,
    textTransform: variables.typography.h5.textTransform
  },
  body1: {
    fontSize: variables.typography.body.fontSize,
    letterSpacing: variables.typography.body.letterSpacing,
    lineHeight: variables.typography.body.lineHeight,
    fontWeight: variables.typography.body.fontWeight
  },
  body2: {
    fontSize: variables.typography.longform.fontSize,
    letterSpacing: variables.typography.longform.letterSpacing,
    lineHeight: variables.typography.longform.lineHeight,
    fontWeight: variables.typography.longform.fontWeight
  },
  caption: {
    fontSize: variables.typography.caption.fontSize,
    letterSpacing: variables.typography.caption.letterSpacing,
    lineHeight: variables.typography.caption.lineHeight,
    fontWeight: variables.typography.caption.fontWeight,
  },
}

export default typography;
