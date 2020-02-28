import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { fade, darken } from "@material-ui/core/styles/colorManipulator";
import defaultTheme from "@material-ui/core/styles/defaultTheme";
import palette from "../palette";
import colors from "../colors";
import variables from "../variables";
import shadows from "../shadows";

const pressShadow = `0 0 0 1px ${fade(palette.text.primary, 0.4)}, inset 0 0 0 100px ${palette.action.active}`;

const overlays = {
  MuiTooltip: {
    tooltip: {
      fontSize: variables.typography.caption.fontSize,
      letterSpacing: variables.typography.caption.letterSpacing,
      backgroundColor: fade(palette.text.primary, 0.9),
    },
    tooltipPlacementTop: {
      margin: [[defaultTheme.spacing(0.5), 0]],
      [variables.breakpoints.up('sm')]: {
        margin: undefined,
      }      
    }
  },
}

export default overlays;
