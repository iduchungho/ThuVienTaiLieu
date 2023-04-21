import React from 'react'
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Select, MenuItem } from '@mui/material';
const PaymentForm = () => {
    const [status, setStatus] = useState('');
    const [type, setType] = useState('');
    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
      };
    const handleChangeType = (event) => {
        setType(event.target.value);
      };
  return (
    <Box component="form" sx={{ display: 'grip'}}>
        <div>
        <FormControl sx={{m: 3, width: '60%'}}>
            <InputLabel id="selecttype">Payment Type</InputLabel>
            <Select
                id="selecttype"
                value={type}
                label="Type"
                onChange={handleChangeType}
            >
                <MenuItem value={"Credit"}>By Credit</MenuItem>
                <MenuItem value={"Cash"}>By Cash</MenuItem>
            </Select>
        </FormControl>
        <FormControl sx={{m: 3, width: '60%'}}>
            <InputLabel id="selectstatus">Status</InputLabel>
            <Select
                id="selectstatus"
                value={status}
                label="Status"
                onChange={handleChangeStatus}
            >
                <MenuItem value={"Incomplete"}>Pending</MenuItem>
                <MenuItem value={"Complete"}>Complete</MenuItem>
                <MenuItem value={"Ood"}>Out of date</MenuItem>
            </Select>
        </FormControl>
        </div>
        <div>
            <TextField 
            sx={{m: 3}}
            label="Time Stamp"
            id="time_stamp"
            type="datetime-local"
            InputLabelProps={{
                shrink: true,
              }}
            />
        </div>
        <div className='flex gap-4 justify-end'>
            <Button variant="contained" type='reset'>Reset</Button>
            <Button variant="contained" type='submit'>Save</Button>
        </div>
    </Box>
  )
}

export default PaymentForm
