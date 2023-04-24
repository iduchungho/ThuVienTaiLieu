import React from 'react'
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { Select, MenuItem } from '@mui/material';
import { UploadNews } from '../../utils/news';
const CreateNewsForm = () => {
    const [status, setStatus] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [created_at, setCreatedAt] = useState('');
    const [updated_at, setUpdatedAt] = useState('');
    const handleChange = (event) => {
        setStatus(event.target.value);
      };

    const submit = async (e) => {
        e.preventDefault();
        const input = {
            title : title,
            content : content,
            author : author,
            created_at : created_at,
            updated_at : updated_at
        }
        // console.log(input)
        const res = await UploadNews(JSON.stringify(input))
        // console.log(res)
        window.location.reload(false)
    }
  return (
    <Box component="form" sx={{ display: 'grip'}} onSubmit={(e)=>submit(e)}>
        <div>
            <TextField 
            sx={{m: 3, ml:2}}
            label="Title"
            id="title"
            placeholder="Enter the title"
            onChange={(e) => setTitle(e.target.value)}
            />
            <TextField 
            sx={{m: 3, mr: 2}}
            label="Author"
            id="author"
            placeholder="Enter the arthor"
            onChange={(e) => setAuthor(e.target.value)}
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
            onChange={(e) => setContent(e.target.value)}
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
            onChange={(e) => setCreatedAt(e.target.value)}
            />
            <TextField 
            sx={{m: 3, ml:2}}
            label="Update at"
            id="updated_at"
            type="datetime-local"
            InputLabelProps={{
                shrink: true,
              }}
            onChange={(e) => setUpdatedAt(e.target.value)}
            />
        </div>
        <div className='flex gap-4 justify-end'>
            <Button variant="contained" type='reset'>Reset</Button>
            <Button variant="contained" type='submit'>Save</Button>
        </div>
    </Box>
  )
}

export default CreateNewsForm
