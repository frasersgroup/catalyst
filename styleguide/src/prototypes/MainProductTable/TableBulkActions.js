import React, { Fragment } from 'react';

import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Typography
} from "@material-ui/core";
import Button from "../../../../package/src/components/Button";
import Banner from "../../../../package/src/components/Banner";
import DataField from "../../../../package/src/components/DataField";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

class TableBulkActions extends React.Component {
  render() {
    const { numSelected } = this.props;
    return (
      <Box bgcolor="grey.50" display="flex" alignItems="center" p={2}>
        <Banner
          plain
          status="info"
          action={{
            label: "Clear selection",
            onClick: () => console.log("clicked")
          }}
        >
          {numSelected} products selected
        </Banner>
        <Box pr={1} />
        <Button endIcon={<ArrowDropDownIcon />}>Bulk Actions</Button>
      </Box>
    );
  }
}

export default TableBulkActions;