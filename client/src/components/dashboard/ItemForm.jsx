import React from 'react'
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
const ItemForm = () => {
  return (
    <Box component="form" sx={{ display: 'grip'}}>
        <div>
            <FormControl>
                <Input label="Image" type="file"/>
            </FormControl>
        </div>
        <div>
            <TextField 
            sx={{m: 3}}
            label="Menu Name"
            id="text"
            placeholder="Enter the menu name"
            />
            <TextField 
            sx={{m: 3}}
            label="Price"
            id="price"
            type="number"
            placeholder="Enter the Price"
            />
        </div>
        <div className='flex gap-4 justify-end'>
            <Button variant="contained" type='reset'>Reset</Button>
            <Button variant="contained" type='submit'>Save</Button>
        </div>
    </Box>
  )
}

export default ItemForm
