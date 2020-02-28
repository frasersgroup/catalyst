import React, { Fragment } from 'react';

import {
  Box,
  TableRow as MuiTableRow,
  TableCell,
  CardHeader,
  CardContent,
  Divider,
  Link,
  Typography
} from "@material-ui/core";
import Button from "../../../../package/src/components/Button";
import TextField from "../../../../package/src/components/TextField";
import Checkbox from "../../../../package/src/components/Checkbox";
import Avatar from "../../../../package/src/components/Avatar";
import Chip from "../../../../package/src/components/Chip";
import ActionMenu from "../../../../package/src/components/ActionMenu";

import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

class TableRow extends React.Component {
  render() {
    const { selectRow, handleToggleFeatured, handleChangeTextField, isItemSelected, row, index } = this.props;

    if (!row) return null;

    const actionOptions = [{
      label: "Remove product from category",
      confirmTitle: "Remove product from category",
      confirmMessage: `Are you sure you want to remove ${row.name} from category?`,
    }];

    const labelId = `enhanced-table-checkbox-${index}`;

    return (
      <MuiTableRow
        role="checkbox"
        aria-checked={isItemSelected}
        tabIndex={-1}
        key={row.name}
        selected={isItemSelected}
      >
        <TableCell padding="checkbox">
          <Checkbox
            checked={isItemSelected}
            inputProps={{ 'aria-labelledby': labelId }}
            onClick={selectRow}
          />
        </TableCell>
        <TableCell component="th" id={labelId} scope="row" padding="none">
          <Box display="flex" alignItems="center">
            <Avatar
              src="https://res.cloudinary.com/bobstores/image/upload/w_1000,q_auto,f_auto/2060314_601_main.jpg"
            />
            <Box fontWeight="fontWeightSemiBold" pl={1}>
              <Link>{row.name}</Link>
            </Box>
          </Box>
        </TableCell>
        <TableCell>{row.id}</TableCell>
        <TableCell>{row.date}</TableCell>
        <TableCell>
          {row.visibility ? <Chip status="success" label="Visible" /> : <Chip status="danger" label="Hidden" /> }
        </TableCell>
        <TableCell>
          <Box display="flex" justifyContent="flex-end">
            <Box display="flex" alignItems="center" width={140}>
              <Button variant="text" onClick={() => handleToggleFeatured(row.id)}>
                {row.featured ? <StarIcon color="primary" /> : <StarBorderIcon />}
              </Button>
              <Box pr={1} />
              <TextField
                value={row.featuredOrder}
                onChange={(event) => handleChangeTextField(row.id, event)}
              />
            </Box>
          </Box>
        </TableCell>
        <TableCell>
          <ActionMenu
            options={actionOptions}
            variant="text"
          />
        </TableCell>
      </MuiTableRow>
    );
  }
}

export default TableRow;