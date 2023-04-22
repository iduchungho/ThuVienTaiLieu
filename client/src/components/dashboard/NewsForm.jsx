import React from 'react'
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Select, MenuItem } from '@mui/material';
const NewsForm = () => {
    const [status, setStatus] = useState('');
    const handleChange = (event) => {
        setStatus(event.target.value);
      };

  return (
    <Box component="form" sx={{ display: 'grip'}}>
        <div>
            <TextField 
            sx={{m: 3, ml:2}}
            label="Title"
            id="title"
            placeholder="Enter the title"
            />
            <TextField 
            sx={{m: 3, mr: 2}}
            label="Author"
            id="author"
            placeholder="Enter the arthor"
            />
        </div>
        <div>
            <TextField 
            sx={{m: 3, ml:2, mr: 2}}
            label="Content"
            id="content"    
            fullWidth
            multiline
            placeholder="Enter the content"
            />
        </div>
        <div>
            <TextField 
            sx={{m: 3, ml:2}}
            label="Created at"
            id="created_at"
            type="datetime-local"
            InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField 
            sx={{m: 3, ml:2}}
            label="Update at"
            id="updated_at"
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

export default NewsForm
