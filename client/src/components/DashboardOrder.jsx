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
import IconButton from '@mui/material/IconButton';

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
const columns = [
  { field: 'id', headerName: 'Order ID', width: 100 },
  { field: 'customer_id', headerName: 'Customer ID', width: 100 },
  { field: 'menu_id', headerName: 'Menu ID', width: 100 },
  { field: 'quantity', headerName: 'Quantity', type: 'number', width: 90 },
  {
    field: 'oder_status',
    headerName: 'Status',
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    width: 200,
  },
  { field: 'time_stamp', headerName: 'Time Stamp', width: 130 },  
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
            <IconButton onClick={() => console.log(params.id)}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => console.log(params.id)}>
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      }
    }
];

const rows = [
  { id: 1, customer_id: '13232', menu_id: '353', quantity: 1 , oder_status: 'Pending', time_stamp: '15/4/2023'},
  { id: 2, customer_id: '32133', menu_id: '598', quantity: 1 , oder_status: 'Complete', time_stamp: '15/4/2023'},
  { id: 3, customer_id: '53123', menu_id: '976', quantity: 1 , oder_status: 'Cancel', time_stamp: '15/4/2023'},
  { id: 4, customer_id: '12324', menu_id: '332', quantity: 1 , oder_status: 'Pending', time_stamp: '15/4/2023'},
  { id: 5, customer_id: '23442', menu_id: '314', quantity: 1 , oder_status: 'Pending', time_stamp: '15/4/2023'},
  { id: 6, customer_id: '11231', menu_id: '533', quantity: 1 , oder_status: 'Pending', time_stamp: '15/4/2023'},
  { id: 7, customer_id: '13232', menu_id: '683', quantity: 1 , oder_status: 'Pending', time_stamp: '15/4/2023'},
];


const DashboardClient = () => {
  return (
    <div className='h-screen'>
      <h1 className="text-xl font-bold tracking-wide text-headingColor">
        Orders
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
            rows={rows}
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
    </div>
  )
}

export default DashboardClient