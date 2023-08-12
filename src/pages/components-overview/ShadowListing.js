import PropTypes from "prop-types";
import { useState } from "react";

// material-ui
// import { useTheme } from '@mui/material/styles';
import {
  Grid,
  Stack,
  Link,
  Typography,
  TableRow,
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableBody,
  TableFooter,
  TablePagination,
  Checkbox,
  IconButton,
  Toolbar,
  Tooltip,
  alpha,
  TableSortLabel,
  Box
} from "@mui/material";

import { DeleteOutlined, FilterOutlined } from "@ant-design/icons";
// project import
import MainCard from "components/MainCard";
import MainCardListing from "components/MainCardListing";
import ComponentSkeleton from "./ComponentSkeleton";
// third-party
import NumberFormat from "react-number-format";
// project import
import Dot from "components/@extended/Dot";
import { Link as RouterLink } from "react-router-dom";
import { visuallyHidden } from '@mui/utils';
// ===============================|| SHADOW BOX ||=============================== //
function ShadowBox({ shadow }) {
  return (
    <MainCard border={false} sx={{ boxShadow: shadow }}>
      <Stack spacing={1} justifyContent="center" alignItems="center">
        <Typography variant="h6">boxShadow</Typography>
        <Typography variant="subtitle1">{shadow}</Typography>
      </Stack>
    </MainCard>
  );
}

function createData(trackingNo, name, fat, carbs, protein) {
  return { trackingNo, name, fat, carbs, protein };
}
const rows = [
  createData(84564564, "Camera Lens", 40, 2, 40570),
  createData(98764564, "Laptop", 300, 0, 180139),
  createData(98756325, "Mobile", 355, 1, 90989),
  createData(98652366, "Handset", 50, 1, 10239),
  createData(13286564, "Computer Accessories", 100, 1, 83348),
  createData(86739658, "TV", 99, 0, 410780),
  createData(13256498, "Keyboard", 125, 2, 70999),
  createData(98753263, "Mouse", 89, 2, 10570),
  createData(98753275, "Desktop", 185, 1, 98063),
  createData(98753291, "Chair", 100, 0, 14001),
  createData(98753263, "Mouse", 89, 2, 10570),
  createData(98753275, "Desktop", 185, 1, 98063),
  createData(98753291, "Chair", 100, 0, 14001),
  createData(98753263, "Mouse", 89, 2, 10570),
  createData(98753275, "Desktop", 185, 1, 98063),
  createData(98753291, "Chair", 100, 0, 14001),
];
// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Dessert (100g serving)",
  },
  {
    id: "calories",
    numeric: true,
    disablePadding: false,
    label: "Calories",
  },
  {
    id: "fat",
    numeric: true,
    disablePadding: false,
    label: "Fat (g)",
  },
  {
    id: "carbs",
    numeric: true,
    disablePadding: false,
    label: "Carbs (g)",
  },
  {
    id: "protein",
    numeric: true,
    disablePadding: false,
    label: "Protein (g)",
  },
];
ShadowBox.propTypes = {
  shadow: PropTypes.string.isRequired,
};
// ===============================|| CUSTOM - SHADOW BOX ||=============================== //
function CustomShadowBox({ shadow, label, color, bgcolor }) {
  return (
    <MainCard
      border={false}
      sx={{ bgcolor: bgcolor || "inherit", boxShadow: shadow }}
    >
      <Stack spacing={1} justifyContent="center" alignItems="center">
        <Typography variant="subtitle1" color={color}>
          {label}
        </Typography>
      </Stack>
    </MainCard>
  );
}
CustomShadowBox.propTypes = {
  shadow: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  bgcolor: PropTypes.string,
};

// ==============================|| ORDER TABLE - HEADER ||============================== //

function OrderTableHead({ order, orderBy }) {
  const createSortHandler =
  (property) => (event) => {
    // onRequestSort(event, property);
  };
  return (
    <TableHead>
      <TableRow>
        <TableCell>
          <Checkbox
            color="primary"
            inputProps={{
              "aria-label": "select all desserts",
            }}
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.align}
            padding={headCell.disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

// ==============================|| ORDER TABLE - STATUS ||============================== //

const OrderStatus = ({ status }) => {
  let color;
  let title;

  switch (status) {
    case 0:
      color = "warning";
      title = "Pending";
      break;
    case 1:
      color = "success";
      title = "Approved";
      break;
    case 2:
      color = "error";
      title = "Rejected";
      break;
    default:
      color = "primary";
      title = "None";
  }

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <Dot color={color} />
      <Typography>{title}</Typography>
    </Stack>
  );
};

OrderStatus.propTypes = {
  status: PropTypes.number,
};
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

OrderTableHead.propTypes = {
  order: PropTypes.string,
  orderBy: PropTypes.string,
};

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}
const handleChangePage = () => {
  // setPage(newPage);
};

function EnhancedTableToolbar(props) {
  const { numSelected } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h4"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <DeleteOutlined />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Filter list">
          <IconButton>
            <FilterOutlined />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
}
const handleChangeRowsPerPage = () => {};

// ============================|| COMPONENT - SHADOW ||============================ //
const ComponentShadowListing = () => {
  const [order] = useState("asc");
  const [orderBy] = useState("calories");
  const [selected] = useState([]);
  const isSelected = (calories) => selected.indexOf(calories) !== -1;
  return (
    <ComponentSkeleton>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <MainCardListing
            codeHighlight
            contentSX={{ minHeight: "calc(100vh - 240px)" }}
          >
            <EnhancedTableToolbar numSelected={0} />
            <TableContainer
              sx={{
                width: "100%",
                overflowX: "auto",
                maxHeight: "calc(100vh - 340px)",
                position: "relative",
                display: "block",
                maxWidth: "100%",
                "& td, & th": { whiteSpace: "nowrap" },
              }}
            >
              <Table
                stickyHeader
                aria-label="sticky table"
                aria-labelledby="tableTitle"
                sx={{
                  "& .MuiTableCell-root:first-of-type": {
                    pl: 2,
                  },
                  "& .MuiTableCell-root:last-of-type": {
                    pr: 3,
                  },
                }}
              >
                <OrderTableHead order={order} orderBy={orderBy} />
                <TableBody>
                  {stableSort(rows, getComparator(order, orderBy)).map(
                    (row, index) => {
                      const isItemSelected = isSelected(row.trackingNo);
                      const labelId = `enhanced-table-checkbox-${index}`;

                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                          aria-checked={isItemSelected}
                          tabIndex={-1}
                          key={row.trackingNo}
                          selected={isItemSelected}
                        >
                          <TableCell padding="checkbox">
                            <Checkbox
                              color="primary"
                              inputProps={{
                                "aria-label": "select all desserts",
                              }}
                            />
                          </TableCell>
                          <TableCell
                            component="th"
                            id={labelId}
                            scope="row"
                            align="left"
                          >
                            <Link
                              color="secondary"
                              component={RouterLink}
                              to=""
                            >
                              {row.trackingNo}
                            </Link>
                          </TableCell>
                          <TableCell align="left">{row.name}</TableCell>
                          <TableCell align="right">{row.fat}</TableCell>
                          <TableCell align="left">
                            <OrderStatus status={row.carbs} />
                          </TableCell>
                          <TableCell align="right">
                            <NumberFormat
                              value={row.protein}
                              displayType="text"
                              thousandSeparator
                              prefix="$"
                            />
                          </TableCell>
                        </TableRow>
                      );
                    }
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <TableFooter
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
                maxWidth: "100%",
              }}
            >
              <TableRow>
                <TablePagination
                  sx={{ fontSize: '16px' }}
                  rowsPerPageOptions={[5, 10, 25]}
                  component="div"
                  count={rows.length}
                  rowsPerPage={10}
                  page={0}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </TableRow>
            </TableFooter>
          </MainCardListing>
        </Grid>
      </Grid>
    </ComponentSkeleton>
  );
};
export default ComponentShadowListing;
