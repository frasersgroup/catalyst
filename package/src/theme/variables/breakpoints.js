import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

let breakpoints = createBreakpoints({});

breakpoints.values = {
  xs: 0,
  sm: 620,
  md: 960,
  lg: 1280,
  xl: 1600
}

export default breakpoints;
