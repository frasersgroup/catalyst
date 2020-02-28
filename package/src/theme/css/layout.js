import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { fade } from "@material-ui/core/styles/colorManipulator";
import defaultTheme from "@material-ui/core/styles/defaultTheme";

import palette from "../palette";
import colors from "../colors";
import variables from "../variables";
import shadows from "../shadows";

const chips = {
  MuiContainer: {
    root: {
      [variables.breakpoints.up('md')]: {
        paddingLeft: undefined,
        paddingRight: undefined
      }
    },
    maxWidthXs: {
      maxWidth: 320,
      [variables.breakpoints.up('xs')]: {
        maxWidth: undefined
      },
    },
  },
}

export default chips;
