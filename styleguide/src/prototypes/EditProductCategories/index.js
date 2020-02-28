import React from "react";
import SubdirectoryArrowRightIcon from '@material-ui/icons/SubdirectoryArrowRight';
import Banner from "../../../../package/src/components/Banner";
import Button from "../../../../package/src/components/Button";
import DialogTitle from "../../../../package/src/components/DialogTitle";
import Checkbox from "../../../../package/src/components/Checkbox";
import KeyboardShortcut from "../../../../package/src/components/KeyboardShortcut";
import FormControlLabel from "../../../../package/src/components/FormControlLabel";
import TreeItem from "../../../../package/src/components/TreeItem";

import {
  Box,
  Card,
  Divider,
  Typography,
  Grid,
  Drawer,
  DialogHeader,
  DialogContent,
  DialogActions
} from "@material-ui/core";

import DrawerContent from "./DrawerContent"


class EditProductCategories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpen: true,
    };
  }

  toggleOpenDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  render() {
    const { drawerOpen } = this.state;

    return (
      <Box bgcolor="background.default" p={3}>
        <Button onClick={this.toggleOpenDrawer}>Open Drawer</Button>

        <Drawer
          open={drawerOpen}
          onClose={this.toggleOpenDrawer}
        >
          <DrawerContent toggleOpenDrawer={this.toggleOpenDrawer} />
        </Drawer>
      </Box>
    );
  }
}

export default EditProductCategories;