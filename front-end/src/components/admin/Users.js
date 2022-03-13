import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import { gql, useQuery, useMutation,useLazyQuery } from "@apollo/client";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import { Stack, TableHead ,Select,InputLabel,MenuItem  } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const USERS = gql`
  query {
    getAllUser {
      _id
      last_name
      first_name
      email
      password
      isAdmin
    }
  }
`;
const DELETE = gql`
  mutation DeleteUser($_id: ID!) {
    deleteUser(_id: $_id)
  }
`;

const UPDATE = gql`
  mutation UpdateUser(
    $_id: ID!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $isAdmin:Boolean!
  ) {
    updateUser(
      _id: $_id
      first_name: $firstName
      last_name: $lastName
      email: $email
      password: $password
      isAdmin: $isAdmin
    ) {
      _id
      last_name
      first_name
      email
      password
      isAdmin
    }
  }
`;
const CREATE = gql`
  mutation SignUp(
    $first_name: String!
    $last_name: String!
    $email: String!
    $password: String!
    $isAdmin: Boolean!
  ) {
    createUser(
      first_name: $first_name
      last_name: $last_name
      email: $email
      isAdmin: $isAdmin
      password: $password
    ) {
      token
    }
  }
`;
const DECODE = gql`
query($token:String!){
  Decode(token:$token)
  {
    _id
    last_name
    first_name
    email
    password
    isAdmin
  }
}
`;

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  const [snackbar, setSnackbar] = useState(null);
  const handleCloseSnackbar = () => setSnackbar(null);

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

export default function Users() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [open, setOpen] = React.useState(false);
  const [rows, setRows] = useState([]);
  const [editIndex, setEditIndex] = React.useState();
  const { loading, data } = useQuery(USERS);
  const [decode] = useLazyQuery(DECODE,{
    onCompleted:(data)=>{
      let newArr = [...rows];
      newArr.push(data.Decode)
      setRows(newArr);
      setOpen(false);
    }
  });
  const [UpdateUser] = useMutation(UPDATE, {
    onCompleted: (data) => {
      let newArr = [...rows];
      newArr[editIndex] = data.updateUser;
      setRows(newArr);
      setOpen(false);
    },
  });
  const [DeleteUser] = useMutation(DELETE, {
    onCompleted: (_id) => {
      setRows(rows.filter((item) => item._id !== _id.deleteUser));
    },
  });

  const [CreateUser] = useMutation(CREATE, {
    onCompleted: (data) => {
      decode({
        variables:{
          token:data.createUser.token
        }
      })
    },
  });

  useEffect(() => {
    if (!loading) {
      setRows(data.getAllUser);
      console.log(rows);
    }
  }, [loading]);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleCreate = () => {
    setEditIndex()
    setOpen(true)
  };

  const handleEdit = (id) => {
    setEditIndex(rows.findIndex((rows) => rows._id === id));
    setOpen(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you shoure delete") == true) {
      DeleteUser({
        variables: {
          _id: id,
        },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    if(editIndex === undefined)
    {
      CreateUser({
        variables:{
          first_name: data.get("first-name"),
          last_name: data.get("last-name"),
          email: data.get("email"),
          password: data.get("password"),
          isAdmin: data.get("isadmin")=== 'true',
        }
      })
    }else{
      data.append("_id", rows[editIndex]._id);
      UpdateUser({
        variables: {
          _id: rows[editIndex]._id,
          firstName: data.get("first-name"),
          lastName: data.get("last-name"),
          email: data.get("email"),
          password: data.get("password"),
          isAdmin: data.get("isadmin") === 'true',
        },
      });
    }
  };
  const handleClose = () => setOpen(false);

  return (
    <TableContainer component={Paper}>
      <Button sx={{ mx: 2, my: 1 }} variant="outlined"
      onClick={handleCreate}>
        Create User
      </Button>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
        <TableHead>
          <TableRow>
            <TableCell>Firstname</TableCell>
            <TableCell align="left">LastName</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Password</TableCell>
            <TableCell align="left">Admin</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.first_name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.last_name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.email}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.password}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.isAdmin? "Admin":"User"}
              </TableCell>
              <TableCell
                style={{ width: 160 }}
                align="right"
                onClick={() => handleEdit(row._id)}
              >
                edit
              </TableCell>
              <TableCell
                style={{ width: 160 }}
                align="right"
                onClick={() => handleDelete(row._id)}
              >
                delete
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  "aria-label": "rows per page",
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" onSubmit={handleSubmit}>
          <TextField
            required
            id="first-name"
            name="first-name"
            label="FirstName"
            defaultValue={
              editIndex !== undefined ? rows[editIndex].first_name : ""
            }
          />
          <TextField
            required
            sx={{ ml: 2 }}
            id="last-name"
            name="last-name"
            label="LastName"
            defaultValue={
              editIndex !== undefined ? rows[editIndex].last_name : ""
            }
          />
          <TextField
            required
            sx={{ mt: 2 }}
            id="email"
            name="email"
            label="Email"
            defaultValue={editIndex !== undefined ? rows[editIndex].email : ""}
          />
          <TextField
            required
            sx={{ mt: 2, ml: 2 }}
            id="password"
            name="password"
            label="password"
            defaultValue={
              editIndex !== undefined ? rows[editIndex].password : ""
            }
          />
          <FormControl fullWidth sx={{mt:2}}>
          <InputLabel id="select-label">Age</InputLabel>
            <Select
              labelId="select-label"
              id="isadmin"
              name="isadmin"
              defaultValue={
                editIndex !== undefined ? rows[editIndex].isAdmin==true:""
              }
              label="admin"
            >
              <MenuItem value={true}>Admin</MenuItem>
              <MenuItem value={false}>User</MenuItem>
            </Select>
          </FormControl>
          <Stack direction="row" spacing={2} sx={{ mt: 3, mb: 2 }}>
            <Button type="submit" variant="contained">
              Submit
            </Button>

            <Button
              onClick={() => handleClose()}
              type="close"
              variant="contained"
            >
              close
            </Button>
          </Stack>
        </Box>
      </Modal>
    </TableContainer>
  );
}
