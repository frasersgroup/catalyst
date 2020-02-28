### Overview

The `DialogTitle` component provides a standard layout and typography styles for dialog titles. It uses [DialogTitle](https://material-ui.com/api/dialog-title) component from Material-UI.

### Usage

```jsx
<DialogTitle>Archive 24 products?</DialogTitle>
```

The `DialogTitle` component is to be used within body of the [Dialog](https://material-ui.com/api/dialog) component.

```jsx static
import Dialog from "@material-ui/core/Dialog";

<Dialog>
  <DialogTitle>Archive 24 products?</DialogTitle>
</Dialog>
```


If you add an `onClose` function, it will automatically add a close button.

```jsx
const handleClose = () => { };
<div style={{ paddingLeft: 100, background: "#002740" }}>
  <DialogTitle onClose={handleClose}>Archive 24 products?</DialogTitle>
</div>
```