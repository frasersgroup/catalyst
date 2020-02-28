import React, { Fragment } from 'react';

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

import Button from "../../../../package/src/components/Button";
import DialogTitle from "../../../../package/src/components/DialogTitle";

import ProductRulesCard from "./ProductRulesCard"
import DrawerContent from "./DrawerContent"

class CategoryProductTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // authUser: localStorage.getItem('authUser') && parse(localStorage.getItem('authUser')),
      drawerOpen: true,
      combineValue: "or"
    };
  }

  toggleOpenDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }

  toggleCombineValue = event => {
    this.setState({ combineValue: event.currentTarget.value })
  }

  render() {
    const { drawerOpen, combineValue } = this.state;

    return (
      <Box bgcolor="background.default" p={3}>
        <Grid container>
          <Grid item xs={9}>
          </Grid>
          <Grid item xs={3}>
            <ProductRulesCard toggleOpenDrawer={this.toggleOpenDrawer} />
          </Grid>
        </Grid>

        <Drawer
          open={drawerOpen}
          onClose={this.toggleOpenDrawer}
        >
          <DialogTitle onClose={this.toggleOpenDrawer}>
            Edit Product Rules
          </DialogTitle>
          <DialogContent>
            <DrawerContent
              toggleCombineValue={this.toggleCombineValue}
              combineValue={combineValue}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.toggleOpenDrawer}>
              Cancel
            </Button>
            <Button onClick={this.toggleOpenDrawer} color="primary">
              Save Changes
            </Button>
          </DialogActions>
        </Drawer>
      </Box>
    );
  }
}

export default CategoryProductTable;