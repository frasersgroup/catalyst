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
import DataField from "../../../../package/src/components/DataField";

class ProductRules extends React.Component {
  render() {
    const { toggleOpenDrawer } = this.props;

    return (
      <Card>
        <CardHeader
          title="Product Rules"
          action={
            <Button onClick={toggleOpenDrawer}>
              Edit
            </Button>
          }
        />
        <CardContent>
          <DataField label="Rules">
            <Typography gutterBottom>
              <Box component="span" fontWeight="fontWeightSemiBold">Categories</Box> · Men’s Rain Jackets and Men’s Casual Jackets
            </Typography>
            <Typography gutterBottom>
              <Box component="span" fontWeight="fontWeightSemiBold">Vendors</Box> · Calvin Klein, Nike, and 3 more
            </Typography>
          </DataField>

          <DataField label="Added Products" value="1286101, 1286101-505, and 22 more" />

          <Box pt={2} />
          
          <DataField label="Subtracted Products" value="1286101, 1286101-505, and 22 more" />
        </CardContent>
      </Card>
    );
  }
}

export default ProductRules;