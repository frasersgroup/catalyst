import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableRow as MuiTableRow,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableSortLabel,
  Toolbar,
  Typography,
  Paper,
  IconButton,
  Tooltip,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import Button from "../../../../package/src/components/Button";
import Checkbox from "../../../../package/src/components/Checkbox";
import Banner from "../../../../package/src/components/Banner";
import DataField from "../../../../package/src/components/DataField";
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

import TableRow from "./TableRow"
import TableBulkActions from "./TableBulkActions"

function createData(name, id, date, featured, featuredOrder, order, visibility) {
  return { name, id, date, featured, featuredOrder, order, visibility };
}

const rowsInitial = [
  createData("NIKE Men's Victory Polo", 1233328, "11 Dec 2019 at 10:57am", true, 1, 1, true),
  createData("NIKE Women's Pro Limitless Capris", 1260444, "11 Dec 2019 at 10:57am", true, 2, 2, true),
  createData("ASOLO Men's TPS 520 GV EVO Backpacking Boots", 1293895, "11 Dec 2019 at 10:57am", false, "", 3, false),
  createData("CARHARTT Men's Force Delmont Short-Sleeve Tee, Extended Size", 2064125, "11 Dec 2019 at 10:57am", false, "", 4, false),
  createData("NIKE Women's Leg-A-See Logo Tights", 1352911, "11 Dec 2019 at 10:57am", false, "", 5, true),
  createData("NIKE Men's Hyperwarm Dri-Fit Active Shirt", 1242532, "11 Dec 2019 at 10:57am", false, "", 6, true),
  createData("NIKE Men's Racer Knit Track Pants", 1260412, "11 Dec 2019 at 10:57am", false, "", 7, true),
  createData("NIKE Men's Dri-Fit Cotton Short Sleeve Top", 1264635, "11 Dec 2019 at 10:57am", false, "", 8, true),
  createData("NIKE Spin 2.0 Football", 1264651, "11 Dec 2019 at 10:57am", false, "", 9, true),
  createData("NIKE Boy's Flex Experience 4 Running Shoes", 1266880, "11 Dec 2019 at 10:57am", false, "", 10, true),
  createData("NIKE Men's Academy 3 Short Sleeve Training Top", 1271941, "11 Dec 2019 at 10:57am", false, "", 11, true),
  createData("CARHARTT Men's Flame-Resistant High-Vis Force Long-Sleeve-Tee, Extended Sizes", 2053182, "11 Dec 2019 at 10:57am", false, "", 12, true),
  createData("CARHARTT Men's Flame-Resistant High-Vis Force Long-Sleeve-Tee", 2053180, "11 Dec 2019 at 10:57am", false, "", 13, true),
];

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
  { id: 'product', numeric: false, disablePadding: true, label: 'Product' },
  { id: 'id', numeric: false, disablePadding: false, label: 'ID' },
  { id: 'date', numeric: false, disablePadding: false, label: 'Date Added to Category' },
  { id: 'visibility', numeric: false, disablePadding: false, label: 'Visibility' },
  { id: 'order', numeric: false, disablePadding: false, label: 'Featured Order' },
  { id: 'action', numeric: false, disablePadding: false, label: ' ' },
];

function EnhancedTableHead(props) {
  const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <MuiTableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{ 'aria-label': 'select all desserts' }}
          />
        </TableCell>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              <span className={classes.tableHeader}>{headCell.label}</span>
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </MuiTableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: '1 1 100%',
  },
}));

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar className={classes.root}>
      {numSelected > 0 ? (
        <TableBulkActions
          numSelected={numSelected}
        />
      ) : (
        <Typography className={classes.title} variant="h6" id="tableTitle">
          Nutrition
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  tableHeader: {
    whiteSpace: "nowrap"
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('order');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(15);
  const [rows, setRows] = React.useState(rowsInitial);

  // When changing featured order, shuffle others around so no two items share an order number.
  const setOrderAndShiftOthers = (rowID, oldFeaturedOrder, newFeaturedOrder) => {
    let newRows = [...rows];
    let featuredRows = [...rows].filter(row => row.featured);

    if (oldFeaturedOrder) {
      if (oldFeaturedOrder > newFeaturedOrder) {
        // 4 -> 2
        // Shift others between 2 and 4 down (ie. ++)
        featuredRows.forEach(function(featuredRow) {
          if (featuredRow.id !== rowID
            && featuredRow.featuredOrder >= newFeaturedOrder
            && featuredRow.featuredOrder <= oldFeaturedOrder) {
            newRows.find(row => row.id === featuredRow.id).featuredOrder++;
          }
        });
      } else {
        // 2 -> 4
        // Shift others between 2 and 4 up (ie. --)
        featuredRows.forEach(function(featuredRow) {
          if (featuredRow.id !== rowID
            && featuredRow.featuredOrder >= oldFeaturedOrder
            && featuredRow.featuredOrder <= newFeaturedOrder) {
            newRows.find(row => row.id === featuredRow.id).featuredOrder--;
          }
        });
      }
    }

    setRows(newRows);
  }

  // Toggle featured on and off. If toggling on, append to the end of the featuredOrder
  const handleToggleFeatured = rowID => {
    let newRows = [...rows];

    const row = newRows.find(row => row.id === rowID);
    if (row.featured) {
      // Unfeaturing
      row.featured = false;
      row.featuredOrder = "";
    } else {
      // Featuring
      row.featured = true;

      let featuredCount = 0;
      newRows.forEach(thisRow => { if (thisRow.featured) featuredCount++; });
      row.featuredOrder = featuredCount;
    }

    setRows(newRows);
  }

  const handleChangeTextField = (rowID, event) => {
    let newRows = [...rows];

    const thisRow = newRows.find(row => row.id === rowID);
    const oldFeaturedOrder = thisRow.featuredOrder;
    const newFeaturedOrder = event.currentTarget.value;

    if (thisRow.featured && newFeaturedOrder.length === 0) { 
      thisRow.featured = false;
    } else if (!thisRow.featured && newFeaturedOrder.length > 0) {
      thisRow.featured = true;
    }

    // If they input too high a number, drop it down.
    let featuredRows = newRows.filter(row => row.featured);
    if (newFeaturedOrder > featuredRows.length) {
      newFeaturedOrder = featuredRows.length;
    }

    // set new featured order
    thisRow.featuredOrder = newFeaturedOrder;

    // set the rows state
    setRows(newRows);

    // shift all the other featured rows.
    setOrderAndShiftOthers(rowID, oldFeaturedOrder, newFeaturedOrder);
  }

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(n => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            aria-label="enhanced table"
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);

                  return (
                    <TableRow
                      selectRow={event => handleClick(event, row.name)}
                      handleToggleFeatured={handleToggleFeatured}
                      handleChangeTextField={handleChangeTextField}
                      isItemSelected={isItemSelected}
                      row={row}
                      key={row.name}
                      index={index}
                    />
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: (53) * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
    </div>
  );
}