import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import defaultTheme from "@material-ui/core/styles/defaultTheme";
import palette from "../palette";
import colors from "../colors";
import variables from "../variables";
import shadows from "../shadows";

const cards = {
  MuiCard: {
    root: {
      background: palette.background.card.body,
    }
  },
  MuiCardContent: {
    root: {
      "&:last-child": {
        paddingBottom: undefined
      }
    }
  },
  MuiCardHeader: {
    root: {
      background: palette.background.card.header,
      boxShadow: `0 1px ${palette.divider}`
    },
    subheader: {
      color: palette.text.secondary,
      marginLeft: defaultTheme.spacing(1)
    },
    action: {
      alignSelf: undefined,
      marginTop: undefined,
      marginRight: undefined
    }
  },
  MuiCardActions: {
    root: {
      padding: defaultTheme.spacing(2),
      justifyContent: "flex-end",
      background: palette.background.card.header,
      boxShadow: `0 -1px ${palette.divider}`,
    },
    spacing: {
      "& > * + *": {
        marginLeft: defaultTheme.spacing(2)
      }
    }
  },
  MuiPaper: {
    rounded: {
      borderRadius: variables.shape.borderRadiusLarge
    }
  },
}

export default cards;
