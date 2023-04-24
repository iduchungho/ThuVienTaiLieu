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
import PaymentForm from './PaymentForm';
import { DeletePaymentByID, GetAll_payment } from '../../utils/payment';
import { useSelector } from 'react-redux';

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
  { id: 1, order_id: '231', payment_type: 'By Credit', payment_status: "Complete" , time_stamp: '20:52:15 20/4/2023'},
  { id: 2, order_id: '534', payment_type: 'By Credit', payment_status: "Complete" , time_stamp: '20:52:15 20/4/2023'},
  { id: 3, order_id: '342', payment_type: 'By Credit', payment_status: "Complete" , time_stamp: '20:52:15 20/4/2023'},
  { id: 4, order_id: '786', payment_type: 'By Credit', payment_status: "Complete" , time_stamp: '20:52:15 20/4/2023'},
  { id: 5, order_id: '458', payment_type: 'By Credit', payment_status: "Complete" , time_stamp: '20:52:15 20/4/2023'},
  { id: 6, order_id: '543', payment_type: 'By Credit', payment_status: "Complete" , time_stamp: '20:52:15 20/4/2023'},
  { id: 7, order_id: '253', payment_type: 'By Credit', payment_status: "Complete" , time_stamp: '20:52:15 20/4/2023'},
];

let currentIdRemove = -1 ;

const DashboardPayment = () => {
  const [remove, setRemove] = useState(false);
  const [data, setData] = useState(rows);
  const [openPopup, setOpenPopup] = useState(false);
  const [Id, setID] = useState(-1);
  const user = useSelector((state) => state.user.current)
  const ReturnCurrentPage = () => {
    setRemove(false);
  };

  const DeleteAccount = async () => {
    setRemove(false);
    const updatedata = data.filter((row) => row.id !== currentIdRemove);
    setData(updatedata);
    const res = await DeletePaymentByID(user.customer_id, currentIdRemove)
    console.log(res);
  }

  const get_payment = async (id) =>{
    const res = await GetAll_payment(id);
    return res
  }

  React.useEffect(()=>{
    const get_payment = async (id) =>{
      const res = await GetAll_payment(id);
      console.log(res.payments);
      setData(res.payments)
    }
    get_payment(user.customer_id)
  },[])

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'order_id', headerName: 'Order Id', width: 130 },
    { field: 'payment_type', headerName: 'Payment Type', width: 130 },
    {
      field: 'payment_status',
      headerName: 'Payment Status',
      width: 130,
    },
    {
      field: 'time_stamp',
      headerName: 'Time Stamp',
      width: 200,
    },
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
              <IconButton onClick={() => {
                setID(params.id)
                setOpenPopup(true)
              }}>
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
        Payment
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
            getRowHeight={() => 'auto'}
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
      title = {"EDIT PAYMENT'S INFORMATION"}
      >
          <PaymentForm id={Id}/>
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

export default DashboardPayment