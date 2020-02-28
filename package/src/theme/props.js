
const props = {
  MuiTypography: {
    color: "textPrimary"
  },

  // Buttons
  MuiButtonBase: {
    disableRipple: true
  },
  MuiButton: {
    variant: "contained",
  },

  // ActionMenus
  MuiMenu: {
    variant: "menu"
  },
  
  // TextFields
  MuiInput: {
    disableUnderline: true
  },
  MuiInputLabel: {
    shrink: false,
    disableAnimation: true
  },
  MuiFormHelperText: {
  },
  MuiTextField: {
    variant: "outlined"
  },
  MuiSelect: {
    native: true
  },
  MuiOutlinedInput: {
    notched: false
  },

  // Other Inputs
  MuiCheckbox: {
    color: "default",
    disableRipple: true
  },

  // Cards
  MuiPaper: {
  },
  MuiCard: {
    elevation: 4
  },
  MuiCardHeader: {
    titleTypographyProps: {
      display: "inline",
      variant: "h4"
    },
    subheaderTypographyProps: {
      display: "inline",
      variant: "h5"
    }
  },

  // Dialogs
  MuiDialog: {
  },
  MuiDialogContentText: {
    color: "inherit",
  },
  MuiDrawer: {
    anchor: "right",
  },

  // Tabs
  MuiTabs: {
    textColor: "primary"
  },

  // Overlays
  MuiTooltip: {
    placement: "top"
  },

  // Chips
  MuiChip: {
    size: "small"
  },

  // Avatar
  MuiAvatar: {
    variant: "rounded"
  },

  // Layout
  MuiContainer: {
    maxWidth: "lg"
  },
  MuiToolbar: {
    disableGutters: true
  },
  MuiGrid: {
    spacing: 3
  },




  MuiAppBar: {
    elevation: 0
  },
  MuiListItemText: {
    primaryTypographyProps: {
      variant: "body1"
    },
    secondaryTypographyProps: {
      variant: "body1"
    }
  }
}

export default props;
