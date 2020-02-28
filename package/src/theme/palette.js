import { fade } from "@material-ui/core/styles/colorManipulator";
import colors from "./colors";

const colorPage = "#DFE6ED";
const colorCardBackground = "#F7F9FA";
const colorCardHeader = "#F0F4F7";

const palette = {
  colors,
  text: { },
  action: { },
  primary: {
    main: "#1976d2",
    light: "rgb(71, 145, 219)",
    dark: "rgb(17, 82, 147)",
    contrastText: "#fff"
  },
  secondary: {
    main: "rgb(220, 0, 78)",
    light: "rgb(227, 51, 113)",
    dark: "rgb(154, 0, 54)",
    contrastText: "#fff"
  },
  error: {
    light: "#e57373",
    main: "#f44336",
    dark: "#d32f2f",
    contrastText: "#fff"
  },
  warning: {
    light: "#ffd54f",
    main: "#ffc107",
    dark: "#ffa000",
    contrastText: "rgba(0, 0, 0, 0.87)"
  },
  info: {
    light: "#64b5f6",
    main: "#2196f3",
    dark: "#1976d2",
    contrastText: "#fff"
  },
  success: {
    light: "#81c784",
    main: "#4caf50",
    dark: "#388e3c",
    contrastText: "rgba(0, 0, 0, 0.87)"
  },
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#d5d5d5",
    A200: "#aaaaaa",
    A400: "#303030",
    A700: "#616161"
  },
  background: {
    paper: "#fff",
    default: colorPage,
    card: {
      header: colorCardHeader,
      body: colorCardBackground,
    }
  },
};

palette.text.primary = "#002740";
palette.text.secondary = fade(palette.text.primary, 0.66);
palette.text.disabled = fade(palette.text.primary, 0.33);
palette.text.hint = fade(palette.text.primary, 0.66);

palette.action.active = fade(palette.text.primary, 0.66);
palette.action.hover = fade(palette.text.primary, 0.08);
palette.action.hoverOpacity = 0.08;
palette.action.selected = fade(palette.text.primary, 0.14);
palette.action.disabled = fade(palette.text.primary, 0.26);
palette.action.disabledBackground = fade(palette.text.primary, 0.12);

palette.primary.main = "#007DB8";
palette.secondary.main = "#B7386F";
palette.success.main = "#287659";
palette.warning.main = "#FFB300";
palette.error.main = "#B7386F";
palette.info.main = "#007DB8";

palette.grey[200] = colorPage;
palette.grey[100] = colorCardBackground;
palette.grey[50] = colorCardHeader;

palette.divider = fade(palette.text.primary, 0.1);

export default palette;