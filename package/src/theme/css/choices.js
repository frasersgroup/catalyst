import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { fade, darken } from "@material-ui/core/styles/colorManipulator";
import defaultTheme from "@material-ui/core/styles/defaultTheme";
import palette from "../palette";
import colors from "../colors";
import variables from "../variables";
import shadows from "../shadows";

const pressShadow = `0 0 0 1px ${fade(palette.text.primary, 0.4)}, inset 0 0 0 100px ${palette.action.active}`;

const choices = {
  MuiFormControlLabel: {
    root: {
      marginLeft: 0,
      marginRight: 0,
    }
  },
}

export default choices;
