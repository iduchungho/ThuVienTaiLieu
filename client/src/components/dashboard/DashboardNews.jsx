import * as React from 'react'
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import Toolbar from '@mui/material/Toolbar';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { DataGrid } from '@mui/x-data-grid';
import { GridActionsCellItem , GRID_CHECKBOX_SELECTION_COL_DEF} from '@mui/x-data-grid-pro';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import EditForm from './EditForm';

import f1 from '../img/f1.png';
import f2 from '../img/f2.png';
import f3 from '../img/f3.png';
import f4 from '../img/f4.png';
import f5 from '../img/f5.png';
import f6 from '../img/f6.png';
import f7 from '../img/f7.png';
import NewsForm from './NewsForm';


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
  { id: 1, title: "First new", content: 'This is a demo for news', author: "huy", created_at: '20:52:15 20/4/2023', updated_at: '20:52:15 20/4/2023'},
  { id: 2, title: "First new", content: 'This is a demo for news', author: "huy", created_at: '20:52:15 20/4/2023', updated_at: '20:52:15 20/4/2023'},
  { id: 3, title: "First new", content: 'This is a demo for news', author: "huy", created_at: '20:52:15 20/4/2023', updated_at: '20:52:15 20/4/2023'},
  { id: 4, title: "First new", content: 'This is a demo for news', author: "huy", created_at: '20:52:15 20/4/2023', updated_at: '20:52:15 20/4/2023'},
  { id: 5, title: "First new", content: 'This is a demo for news', author: "huy", created_at: '20:52:15 20/4/2023', updated_at: '20:52:15 20/4/2023'},
  { id: 6, title: "First new", content: 'This is a demo for news', author: "huy", created_at: '20:52:15 20/4/2023', updated_at: '20:52:15 20/4/2023'},
];

let currentIdRemove = -1 ;

const DashboardClient = () => {

  const [remove, setRemove] = useState(false);
  const [data, setData] = useState(rows);
  const [openPopup, setOpenPopup] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const ReturnCurrentPage = () => {
    setRemove(false);
  };

  const DeleteCurrentId = () => {
    setRemove(false);
    console.log(currentIdRemove)
    const updatedata = data.filter((row) => row.id !== currentIdRemove);
    setData(updatedata);
  }

  const columns = [
    { field: 'id', headerName: 'Menu ID', width: 100 },
    { field: 'title', headerName: 'Title', width: 100},
    { field: 'content', headerName: 'Content', width: 300 },
    { field: 'author', headerName: 'Authod', width: 100 },
    { field: 'created_at', headerName: 'Created At', width: 150 },
    { field: 'updated_at', headerName: 'Updated At', width: 150 },
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
                }}>
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
        News
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
          <Button variant="contained" onClick={() => setOpenAdd(true)}>Add news</Button>
        </Toolbar>
        <div style={{ height: 500, width: '105%' }}>
          <DataGrid
            rows={data}
            rowHeight={75}
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
      openPopup = {openAdd}
      setOpenPopup = {setOpenAdd}
      title = {"ADD NEWS"}
      >
          <NewsForm/>
      </EditForm>

      <EditForm
      openPopup = {openPopup}
      setOpenPopup = {setOpenPopup}
      title = {"EDIT ITEM'S INFORMATION"}
      >
          <NewsForm/>
      </EditForm>
      <Dialog
        open={remove}
        onClose={ReturnCurrentPage}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"REMOVE ITEM"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Do you want to remove this item?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={ReturnCurrentPage}>No</Button>
          <Button onClick={DeleteCurrentId} autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default DashboardClient