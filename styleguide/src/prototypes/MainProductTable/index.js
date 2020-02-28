import React, { Fragment } from 'react';

import {
  Box,
  Card,
  Divider,
  Typography,
  Grid
} from "@material-ui/core";

import ProductRules from "./ProductRules"
import Header from "./Header"
import Table from "./Table"

class CategoryProductTable extends React.Component {
  render() {
    return (
      <Box bgcolor="background.default" p={3}>
        <Grid container>
          <Grid item xs={9}>
            <Header />

            <Card>
              <Table />
            </Card>
          </Grid>
          <Grid item xs={3}>
            <ProductRules />
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default CategoryProductTable;