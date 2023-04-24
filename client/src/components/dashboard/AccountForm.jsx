import React, { useState } from 'react'
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { GetCustomerByID, UpdateCustomer } from '../../utils/customer';
const AccountForm = ({id}) => {
    const [fname, setFname] = useState("")
    const [lname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [city, setCity] = useState("")

    const submit = async (e) => {
        e.preventDefault();
        console.log(fname)
        console.log(lname)
        console.log(email)
        console.log(phone)
        console.log(city)
        const res = await GetCustomerByID(id)
        console.log(res.data[0])
        const input = {
            ...res.data[0],
            first_name : fname,
            last_name : lname,
            email_id : email,
            phone_no : phone,
            city : city,
        }
        const res2 = await UpdateCustomer(JSON.stringify(input))
        console.log(res2)
    }

  return (
    <Box component="form" sx={{ display: 'grip'}} onSubmit={(e) => submit(e)}>
        <div>
            <TextField 
            sx={{m: 3}}
            label="First Name"
            id="fname"
            placeholder="Enter the first name"
            onChange={(e) => setFname(e.target.value)}
            />
            <TextField 
            sx={{m: 3}}
            label="Last Name"
            id="lname"
            placeholder="Enter the last name"
            onChange={(e) => setLname(e.target.value)}
            />
        </div>
        <div>
            <TextField 
            sx={{m: 3}}
            label="Email"
            id="email"
            placeholder="Enter the email"
            onChange={(e) => setEmail(e.target.value)}
            />
            <TextField 
            sx={{m: 3}}
            label="Age"
            id="age"
            type="number"
            placeholder="Enter the age"
            />
        </div>
        <div>
            <TextField 
            sx={{m: 3}}
            label="Phone number"
            id="phone"
            placeholder="Enter the phone number"
            onChange={(e) => setPhone(e.target.value)}
            />
            <TextField 
            sx={{m: 3}}
            label="City"
            id="city"
            placeholder="Enter the city"
            onChange={(e) => setCity(e.target.value)}
            />
        </div>
        <div className='flex gap-4 justify-end'>
            <Button variant="contained" type='reset'>Reset</Button>
            <Button variant="contained" type='submit'>Save</Button>
        </div>
    </Box>
  )
}

export default AccountForm
