import * as React from 'react'
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import Toolbar from '@mui/material/Toolbar';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';
import {GridActionsCellItem , GRID_CHECKBOX_SELECTION_COL_DEF} from '@mui/x-data-grid-pro';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditForm from './EditForm';
import AccountForm from './AccountForm';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));



const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 , email: 'Jon@gmail.com', phone: '0123456789',city: 'Ho Chi Minh City'},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 , email: 'Cersei@gmail.com', phone: '0123456789',city: 'Ho Chi Minh City'},
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 , email: 'Jaime@gmail.com', phone: '0123456789',city: 'Ho Chi Minh City'},
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 , email: 'Arya@gmail.com', phone: '0123456789',city: 'Ho Chi Minh City'},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null , email: 'Daenerys@gmail.com', phone: '0123456789',city: 'Ho Chi Minh City'},
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 , email: 'Melisandre@gmail.com', phone: '0123456789',city: 'Ho Chi Minh City'},
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 , email: 'Ferrara@gmail.com', phone: '0123456789',city: 'Ho Chi Minh City'},
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 , email: 'Rossini@gmail.com', phone: '0123456789',city: 'Ho Chi Minh City'},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 , email: 'Harvey@gmail.com', phone: '0123456789',city: 'Ho Chi Minh City'},
];

let currentIdRemove = -1 ;

const DashboardClient = () => {
  const [remove, setRemove] = useState(false);
  const [data, setData] = useState(rows);
  const [openPopup, setOpenPopup] = useState(false);

  const ReturnCurrentPage = () => {
    setRemove(false);
  };

  const DeleteAccount = () => {
    setRemove(false);
    const updatedata = data.filter((row) => row.id !== currentIdRemove);
    setData(updatedata);
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 50,
    },
    {
      field: 'email',
      headerName: 'Email',
      width: 200,
    },
    { field: 'phone', headerName: 'Phone Number', width: 130 },  
    { field: 'city', headerName: 'City', width: 130 },
    {
      field: "actions",
      headerName: "",
      width: 120,
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => {
          return (
            <Box
              sx={{
                backgroundColor: "whitesmoke",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <IconButton onClick={() => setOpenPopup(true)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => {
                setRemove(true);
                currentIdRemove = params.id;
                }
              }>
                <DeleteIcon />
              </IconButton>
            </Box>
          );
        }
      }
  ];

  return (
    <div className='h-screen'>
      <h1 className="text-xl font-bold tracking-wide text-headingColor">
        Customers
      </h1>
      <Box sx={{ flexGrow: 1 }}>
        <div className='inline-block'>
        <Toolbar>
          <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
          />
          </Search>
        </Toolbar>

        <div style={{ height: 400, width: '105%' }}>
          <DataGrid
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
            initialState={{ 
              pinnedColumns: {
                left: [GRID_CHECKBOX_SELECTION_COL_DEF.field], 
                right: ['actions'] } 
            }}
            />
          </div>
        </div>
      </Box>

      <EditForm
      openPopup = {openPopup}
      setOpenPopup = {setOpenPopup}
      title = {"EDIT ACCOUNT'S INFORMATION"}
      >
          <AccountForm/>
      </EditForm>

      <Dialog
        open={remove}
        onClose={ReturnCurrentPage}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"REMOVE ACCOUNT"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to remove this account?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ReturnCurrentPage}>No</Button>
          <Button onClick={DeleteAccount} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DashboardClient