```jsx
import React from "react";
import { ButtonGroup, Drawer, DialogHeader, DialogContent, DialogActions, Typography } from "@material-ui/core";
import Button from "../../../package/src/components/Button";
import DialogTitle from "../../../package/src/components/DialogTitle";

function ThisDrawer(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>

      <Drawer
        open={open}
        onClose={() => setOpen(false)}
      >
        <DialogTitle onClose={() => setOpen(false)}>
          All Products
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>Ipsam ipsum harum iusto sint. Voluptas animi quaerat voluptate laudantium iure quasi est. Nemo ducimus nemo blanditiis explicabo eos velit. Aut eos ab quis asperiores ab esse ex est. Asperiores ut officia sed necessitatibus porro dolorem eligendi qui. Dolores quod sit accusamus impedit ipsam neque animi.</Typography>
          <Typography variant="body1">Ipsam ipsum harum iusto sint. Voluptas animi quaerat voluptate laudantium iure quasi est. Nemo ducimus nemo blanditiis explicabo eos velit. Aut eos ab quis asperiores ab esse ex est. Asperiores ut officia sed necessitatibus porro dolorem eligendi qui. Dolores quod sit accusamus impedit ipsam neque animi.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setOpen(false)} color="primary">
            Save Changes
          </Button>
        </DialogActions>
      </Drawer>
    </div>
  );
}

<ThisDrawer />
```