import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import defaultTheme from "@material-ui/core/styles/defaultTheme";
import palette from "./palette";
import colors from "./colors";
import variables from "./variables";
import shadows from "./shadows";

import buttons from "./css/buttons"
import choices from "./css/choices"
import textfields from "./css/textfields"
import cards from "./css/cards"
import menus from "./css/menus"
import dialogs from "./css/dialogs"
import tabs from "./css/tabs"
import chips from "./css/chips"
import overlays from "./css/overlays"
import table from "./css/table"
import layout from "./css/layout"

const breakpoints = createBreakpoints({});
const toolbarHeight = 80;
const toolbarMobileHeight = 54;

// Colors
export const colorPrimaryMain = colors.coolGrey;
export const colorSecondaryMain = colors.reactionBlue;

// Spacing
export const defaultSpacingUnit = 8;
export const drawerWidth = 280;
export const detailDrawerWidth = 400;

// Typography
export const fontFamily = "'Source Sans Pro', 'Helvetica Neue', Helvetica, sans-serif";
export const defaultFontSize = 16;
export const fontWeightLight = 400;
export const fontWeightRegular = 400;
export const fontWeightMedium = 500;
export const fontWeightSemiBold = 600;
export const fontWeightBold = 700;

// Typography - Letter-spacing
export const captionLetterSpacing = 0.28;
export const body2LetterSpacing = 0.28;
export const body1LetterSpacing = 0.3;
export const body1BoldLetterSpacing = 0.3;
export const subtitle2LetterSpacing = 0.24;
export const subtitle1LetterSpacing = 0.26;
export const h6LetterSpacing = 0.24;
export const h5LetterSpacing = 0.5;
export const h4LetterSpacing = 0.5;
export const h3LetterSpacing = 0.42;
export const h2LetterSpacing = 0.35;
export const h1LetterSpacing = 0.42;

// Icons
export const smallFontIconSize = 17;

const css = {
  ...choices,
  ...buttons,
  ...textfields,
  ...cards,
  ...menus,
  ...dialogs,
  ...tabs,
  ...table,
  ...chips,
  ...overlays,
  ...layout,
  MuiTypography: {
    gutterBottom: {
      marginBottom: defaultTheme.spacing(1)
    }
  },
  MuiExpansionPanel: {
    root: {
      "&$expanded": {
        margin: 0
      }
    }
  },
  MuiFab: {
    sizeSmall: {
      width: 36,
      height: 36
    }
  },
  MuiSvgIcon: {
    root: {
      // This is a hack to fix issues with the base font-size in the bootstrap
      // theme being 14px, not allowing for `pxToRem(24)` to be the correct value for MUI icons.
      // This should be revisited once the Reaction admin no longer has a need for bootstrap.
      fontSize: 24
    }
  },
}
console.log(css)
export default css;
