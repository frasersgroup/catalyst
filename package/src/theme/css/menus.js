import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import defaultTheme from "@material-ui/core/styles/defaultTheme";
import palette from "../palette";
import colors from "../colors";
import variables from "../variables";
import shadows from "../shadows";

const cards = {
  MuiMenu: {
    paper: {
      borderRadius: variables.shape.borderRadius
    }
  },
  MuiMenuItem: {
    root: {
      paddingTop: 0,
      paddingBottom: 0
    }
  },
  MuiListItemIcon: {
    root: {
      color: undefined,
      minWidth: 0,
      marginRight: defaultTheme.spacing(1)
    }
  },
}

export default cards;
