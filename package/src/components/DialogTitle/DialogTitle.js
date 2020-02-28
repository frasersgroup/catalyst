import React from "react";
import PropTypes from "prop-types";
import {
  DialogTitle as MuiDialogTitle,
  Typography,
  IconButton,
  makeStyles
} from "@material-ui/core";
import { fade } from "@material-ui/core/styles/colorManipulator";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  title: {
    position: "relative"
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(0.5),
    left: theme.spacing(-7),
    color: "white",
    backgroundColor: fade(theme.palette.text.primary, 0.1),
    "&:hover": {
      backgroundColor: fade(theme.palette.text.primary, 0.2),
    }
  }
}));

/**
 * @name DialogTitle
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
const DialogTitle = React.forwardRef(function DialogTitle(props, ref) {
  const { children, onClose, ...other } = props;
  const classes = useStyles();

  return (
    <MuiDialogTitle
      className={classes.title}
      disableTypography
      ref={ref}
      {...other}
    >
      <Typography component="h2" variant="h3">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" onClick={onClose} className={classes.closeButton}>
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});


DialogTitle.propTypes = {
  /**
   * Children
   */
  children: PropTypes.node
};

export default DialogTitle;
