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
import { UpdateOrder } from '../../utils/order';
const OrderForm = (pkg) => {
    const [status, setStatus] = useState(pkg.id.order_status);
    const [time, setTime] = useState(pkg.id.time_stamp);
    const [ctmid, setCtmid] = useState(pkg.id.customer_id);
    const [menuID, setMenuID] = useState(pkg.id.menu_id);
    const [quantity, setQuantity] = useState(pkg.id.quantity);
    const user = useSelector((state) => state.user.current)
    // const []
    const handleChange = (event) => {
        setStatus(event.target.value);
    };
    const submit = async (e) => {
        e.preventDefault();
        console.log(pkg)
        const input = {
            order_id : pkg.id.id,
            order_status : status,
            time_stamp : time,
            customer_id : ctmid,
            menu_id:  menuID,
            quantity, quantity
        }
        // console.log(input)
        const res = await UpdateOrder(user.customer_id, JSON.stringify(input))
        console.log(res)
        window.location.reload(false);
    }
  return (
    <Box component="form" sx={{ display: 'grip'}} onSubmit={(e) => submit(e)}>
        <div>
            <TextField 
            sx={{m: 3}}
            label="Customer Id"
            id="customer"
            placeholder="Enter the customer id"
            onChange={(e) => setCtmid(e.target.value)}
            />
            <TextField 
            sx={{m: 3}}
            label="Menu Id"
            id="menu"
            placeholder="Enter the menu id"
            onChange={(e) => setMenuID(e.target.value)}
            />
        </div>
        <div>
            <TextField 
            sx={{m: 3}}
            label="Quantity"
            id="number"
            placeholder="Enter the quantity"
            onChange={(e) => setQuantity(e.target.value)}
            />
            <FormControl sx={{m: 3, width: '30%'}}>
            <InputLabel id="selectstatus">Status</InputLabel>
            <Select
                id="selectstatus"
                value={status}
                label="Status"
                onChange={handleChange}
            >
                <MenuItem value={"ADDED_TO_CART"}>ADDED TO CART</MenuItem>
                <MenuItem value={"CONFIRMED"}>CONFIRMED</MenuItem>
                <MenuItem value={"PAYMENT_CONFIRMED"}>PAYMENT CONFIRMED</MenuItem>
                <MenuItem value={"DELIVERED"}>DELIVERED</MenuItem>
            </Select>
            </FormControl>
        </div>
        <div>
            <TextField 
            sx={{m: 3}}
            label="Time Stamp"
            id="time_stamp"
            type="date"
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

export default OrderForm
