import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import { fade } from "@material-ui/core/styles/colorManipulator";
import defaultTheme from "@material-ui/core/styles/defaultTheme";

import palette from "../palette";
import colors from "../colors";
import variables from "../variables";
import shadows from "../shadows";

const chips = {
  MuiChip: {
    root: {
      fontSize: variables.typography.body.fontSize,
      lineHeight: variables.typography.body.lineHeight,
      letterSpacing: variables.typography.body.letterSpacing,
      height: undefined,
      backgroundColor: fade(palette.text.primary, 0.15),
    },
    sizeSmall: {
      height: 20
    },
    label: {
      color: palette.text.primary,
      paddingLeft: defaultTheme.spacing(1),
      paddingRight: defaultTheme.spacing(1),
    },
    icon: {
      color: "inherit"
    },
    iconSmall: {
      width: 16,
      height: 16
    },
    deleteIcon: {
      "&:hover": {
        color: palette.error.main
      }
    },
    colorSecondary: {
      "& $label": {
        color: "inherit"
      }
    },
  },
}

export default chips;
