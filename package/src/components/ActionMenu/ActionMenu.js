import React, { Fragment } from "react";
import PropTypes from "prop-types";
import {
  Box,
  Menu,
  Popper,
  Paper,
  MenuList,
  MenuItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Button from "../Button";
import ConfirmDialog from "../ConfirmDialog";

const useStyles = makeStyles((theme) => ({
  menu: {
    marginTop: theme.spacing(0.5)
  },
  menuItem: {
    maxWidth: 320,
    whiteSpace: "normal"
  },
  icon: {
    "& > svg": {
      fontSize: 20
    }
  }
}));

/**
 * @name ActionMenu
 * @param {Object} props Component props
 * @returns {React.Component} A React component
 */
const ActionMenu = React.forwardRef(function ActionMenu(props, ref) {
  const {
    children,
    onSelect,
    options,
    ...otherProps
  } = props;
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = ref || React.useRef(null);

  /**
   * Handle menu item click
   * @param {SyntheticEvent} event Event object
   * @param {Number} index Menu item index
   * @returns {undefined}
   */
  function handleMenuItemClick({ event, index, onClick }) {
    const selectedOption = options[index];
    onSelect && onSelect(selectedOption, index);
    onClick && onClick(event);
    setOpen(false);
  }

  /**
   * Toggle menu open
   * @returns {undefined}
   */
  function handleToggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  /**
   * Handle menu close
   * @param {SyntheticEvent} event Event object
   * @returns {undefined}
   */
  function handleClose(event) {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  }

  function renderListItem(option, index) {
    const {
      icon,
      label,
      details,
      isDisabled,
      cancelActionText,
      confirmActionText,
      confirmTitle,
      confirmMessage,
      onClick
    } = option;

    const callback = (event) => handleMenuItemClick({ event, index, onClick });

    const listItemIconMarkup = icon ? (
      <ListItemIcon className={classes.icon}>
        {icon}
      </ListItemIcon>
    ) : null;

    const boxMarkup = (
      <Fragment>
        {listItemIconMarkup}
        <ListItemText
          primary={label}
          secondary={details}
        />
      </Fragment>
    )

    if (confirmTitle || confirmMessage) {
      return (
        <ConfirmDialog
          cancelActionText={cancelActionText}
          confirmActionText={confirmActionText}
          title={confirmTitle}
          message={confirmMessage}
          onConfirm={callback}
        >
          {({ openDialog }) => (
            <MenuItem
              key={index}
              disabled={isDisabled}
              onClick={openDialog}
              className={classes.menuItem}
            >
              {boxMarkup}
            </MenuItem>
          )}
        </ConfirmDialog>
      );
    } else {
      return (
        <MenuItem
          key={index}
          disabled={isDisabled}
          onClick={callback}
          className={classes.menuItem}
        >
          {boxMarkup}
        </MenuItem>
      )
    }
  }

  const buttonMarkup = children ? children : <MoreHorizIcon />

  return (
    <Fragment>
      <Button
        aria-controls="action-menu"
        aria-haspopup="true"
        className={classes.button}
        onClick={handleToggle}
        ref={anchorRef}
        endIcon={children ? <ArrowDropDownIcon /> : null}
        {...otherProps}
      >
        {buttonMarkup}
      </Button>
      <Menu
      dense
        className={classes.menu}
        anchorEl={anchorRef.current}
        id="action-menu"
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        {options.map((option, index) => {
          return (
            renderListItem(option, index)
          )
        })}
      </Menu>
    </Fragment>
  );
});

ActionMenu.propTypes = {
  /**
   * The content of the Button
   */
  children: PropTypes.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object,
  /**
   * Options: `default` | `inherit` | `primary` | `secondary` | `error`
   */
  color: PropTypes.string,
  /**
   * If `true`, the button will be disabled.
   */
  disabled: PropTypes.bool, // eslint-disable-line
  /**
   * If `true`, the CircularProgress will be displayed and the button will be disabled.
   */
  isWaiting: PropTypes.bool,
  /**
   * Called when an option is selected. Can be use simultaneously with option onClick callbacks.
   */
  onSelect: PropTypes.func,
  /**
   * Menu options
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    /**
     * Change the cancel button label in the confirm dialog
     */
    cancelActionText: PropTypes.string,
    /**
     * Change the label of the confirmation button in the confirm dialog
     */
    confirmActionText: PropTypes.string,
    /**
     * If supplied, the option will show a confirm dialog this message when selected.
     */
    confirmMessage: PropTypes.string,
    /**
     * If supplied, the option will show a confirm dialog this title when selected
     */
    confirmTitle: PropTypes.string,
    /**
     * Secondary option label
     */
    details: PropTypes.string,
    /**
     * Disable the option
     */
    isDisabled: PropTypes.bool,
    /**
     * Option label
     */
    label: PropTypes.string.isRequired,
    /**
     * If supplied, this function will be called in addition to onSelect
     */
    onClick: PropTypes.func
  }))
};

export default ActionMenu;
