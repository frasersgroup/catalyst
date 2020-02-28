import React, { Fragment } from 'react';

import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import Button from "../../../../package/src/components/Button";
import TextField from "../../../../package/src/components/TextField";
import Banner from "../../../../package/src/components/Banner";

class DrawerContent extends React.Component {
  render() {
    const { toggleOpenDrawer, toggleCombineValue, combineValue } = this.props;

    return (
      <div>
        <Typography>Rules</Typography>
        
        <Box py={0.5}>
          <Button filter="Categories">Men’s Rain Jackets, and Men’s Casual Jackets</Button>
        </Box>
        
          <TextField
            id="standard-select-currency-native"
            select
            minimal
            onChange={toggleCombineValue}
            value={combineValue}
            SelectProps={{
              native: true,
            }}
          >
            <option value="and">and</option>
            <option value="or">or</option>
          </TextField>
        
        <Box py={0.5}>
          <Button filter="Vendors">Calvin Klein, Nike, and 3 more</Button>
        </Box>
        
        <TextField
          id="standard-select-currency-native"
          select
          minimal
          onChange={toggleCombineValue}
          value={combineValue}
          SelectProps={{
            native: true,
          }}
        >
          <option value="and">and</option>
          <option value="or">or</option>
        </TextField>

        <Box py={0.5}>
          <Button filter="Description">Holiday</Button>
        </Box>

        <Box pt={1}>
          <Button startIcon={<AddIcon />} variant="text" color="primary">Add Rule</Button>
        </Box>

        <Box py={2}>
          <Divider />
        </Box>

        <Typography>Included Products</Typography>
        
        <Box py={0.5}>
          <Button filter="IDs">1286101</Button>
        </Box>

        <Box py={2}>
          <Divider />
        </Box>

        <Typography>Excluded Products</Typography>
        
        <Box py={0.5}>
          <Button filter="IDs" exclude>1286101</Button>
        </Box>

        <Box py={2}>
          <Divider />
        </Box>

        <Banner status="warning">You have 1 product that is both included and excluded. It will be excluded.</Banner>



      </div>
    );
  }
}

export default DrawerContent;