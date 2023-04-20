import React from 'react'
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Select, MenuItem } from '@mui/material';
const OrderForm = () => {
    const [status, setStatus] = useState('');
    const handleChange = (event) => {
        setStatus(event.target.value);
      };

  return (
    <Box component="form" sx={{ display: 'grip'}}>
        <div>
            <TextField 
            sx={{m: 3}}
            label="Customer Id"
            id="customer"
            placeholder="Enter the customer id"
            />
            <TextField 
            sx={{m: 3}}
            label="Menu Id"
            id="menu"
            placeholder="Enter the menu id"
            />
        </div>
        <div>
            <TextField 
            sx={{m: 3}}
            label="Quantity"
            id="number"
            placeholder="Enter the quantity"
            />
            <FormControl sx={{m: 3, width: '30%'}}>
            <InputLabel id="selectstatus">Status</InputLabel>
            <Select
                id="selectstatus"
                value={status}
                label="Status"
                onChange={handleChange}
            >
                <MenuItem value={"Pending"}>Pending</MenuItem>
                <MenuItem value={"Complete"}>Complete</MenuItem>
                <MenuItem value={"Cancel"}>Cancel</MenuItem>
            </Select>
            </FormControl>
        </div>
        <div>
            <TextField 
            sx={{m: 3}}
            label="Time Stamp"
            id="time_stamp"
            type="date"
            />
        </div>
        <div className='flex gap-4 justify-end'>
            <Button variant="contained" type='reset'>Reset</Button>
            <Button variant="contained" type='submit'>Save</Button>
        </div>
    </Box>
  )
}

export default OrderForm
