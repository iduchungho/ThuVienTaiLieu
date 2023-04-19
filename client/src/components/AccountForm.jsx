import React from 'react'
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const AccountForm = () => {
  return (
    <Box component="form" sx={{ display: 'grip'}}>
        <div>
            <TextField 
            sx={{m: 3}}
            label="First Name"
            id="fname"
            placeholder="Enter the first name"
            />
            <TextField 
            sx={{m: 3}}
            label="Last Name"
            id="lname"
            placeholder="Enter the last name"
            />
        </div>
        <div>
            <TextField 
            sx={{m: 3}}
            label="Email"
            id="email"
            placeholder="Enter the email"
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
            />
            <TextField 
            sx={{m: 3}}
            label="City"
            id="city"
            placeholder="Enter the city"
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
