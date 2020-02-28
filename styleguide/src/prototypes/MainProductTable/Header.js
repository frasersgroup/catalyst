import React, { Fragment } from 'react';

import {
  Box,
  DialogActions,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import GridOnIcon from "@material-ui/icons/GridOn";
import Button from "../../../../package/src/components/Button";

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h2">Products</Typography>
          <Box display="flex" alignItems="center">
            <Button startIcon={<GridOnIcon />}>Grid View</Button>
            <Box pr={1} />
            <Button color="primary">Add Products</Button>
          </Box>
        </Box>

        <Box display="flex" alignItems="center" py={2}>
          <Button filter="Categories">Men’s Rain Jackets and Men’s Casual Jackets</Button>
          <Box pr={1} />
          <Button startIcon={<AddIcon />} color="primary" variant="text">Add Filter</Button>
        </Box>
      </Fragment>
    );
  }
}

export default Header;