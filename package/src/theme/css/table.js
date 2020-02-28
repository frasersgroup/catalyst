import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { fade, darken } from "@material-ui/core/styles/colorManipulator";
import defaultTheme from "@material-ui/core/styles/defaultTheme";
import palette from "../palette";
import colors from "../colors";
import variables from "../variables";
import shadows from "../shadows";

const pressShadow = `0 0 0 1px ${fade(palette.text.primary, 0.4)}, inset 0 0 0 100px ${palette.action.active}`;

const table = {
  MuiTableRow: {
    root: {
      "&:nth-child(even)": {
        background: palette.grey[50]
      }
    }
  },
  MuiTableCell: {
    root: {
      padding: [[defaultTheme.spacing(1), defaultTheme.spacing(2)]],
      // borderBottom: "none"
    },
    paddingCheckbox: {
      "padding": "4px 16px 4px 16px",
      "&:last-child": {
        paddingLeft: 0,
        paddingRight: 16
      }
    }
  },
}

export default table;
