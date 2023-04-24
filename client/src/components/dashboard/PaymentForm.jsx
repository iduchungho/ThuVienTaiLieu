import React from 'react'
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Select, MenuItem } from '@mui/material';
import { useSelector } from 'react-redux';
import { UpdatePaymentByID } from '../../utils/payment';
const PaymentForm = ({id}) => {
    const [status, setStatus] = useState('');
    const [type, setType] = useState('');
    const [time, setTime] = useState('');
    const user = useSelector((state) => state.user.current)
    const handleChangeStatus = (event) => {
        setStatus(event.target.value);
    };
    const handleChangeType = (event) => {
        setType(event.target.value);
    };
    const submit = async (e) => {
        e.preventDefault()
        const timeElapsed = Date.now()
        const today = new Date(timeElapsed);
        // console.log(id)
        // console.log(type)
        // console.log(status)
        // console.log(today.toDateString())
        const input = {
            id : id,
            payment_type : type,
            payment_status : status,
            time_stamp : time
        }
        console.log(input)
        const res = await UpdatePaymentByID(user.customer_id, JSON.stringify(input))
        window.location.reload(false)
        // console.log(res)
    }
  return (
    <Box component="form" sx={{ display: 'grip'}} onSubmit={(e) => submit(e)}>
        <div>
        <FormControl sx={{m: 3, width: '60%'}}>
            <InputLabel id="selecttype">Payment Type</InputLabel>
            <Select
                id="selecttype"
                value={type}
                label="Type"
                onChange={handleChangeType}
            >
                <MenuItem value={"CASH_ON_DELIVERY"}>CASH ON DELIVERY</MenuItem>
                <MenuItem value={"ONLINE_PAYMENT"}>ONLINE PAYMENT</MenuItem>
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
                <MenuItem value={"CONFIRMED"}>CONFIRMED</MenuItem>
                <MenuItem value={"NOT_CONFIRMED"}>NOT CONFIRMED</MenuItem>
                {/* <MenuItem value={"Ood"}>Out of date</MenuItem> */}
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
            onChange={(e) => setTime(e.target.value)}
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
