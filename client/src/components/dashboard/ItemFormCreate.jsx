import React, { useState } from 'react';
import Input from '@mui/material/Input';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { UpdateMenu, UpdateImgMenu, CreateMenu } from '../../utils/menu';
import { useSelector } from 'react-redux';
const ItemFormCreate = ({ id }) => {
  const [img, setImg] = useState({});
  const [name, setName] = useState('');
  const [price, setPrice] = useState(-1);
  const user = useSelector((state) => state.user.current)
  const submit = async (e) => {
    e.preventDefault();
    // console.log(id)
    const input = new FormData();
    input.append('img', img.files[0]);
    input.append('menu_name', name);
    input.append('price', price)

    const res = await CreateMenu(input);
    // console.log(res)
    // const imgres = await UpdateImgMenu(id, image);
    // console.log(imgres);
    window.location.reload(false);
    // console.log(name)
    // console.log(price)
  };

  return (
    <Box component="form" sx={{ display: 'grip' }} onSubmit={(e) => submit(e)}>
      <div>
        <FormControl>
          <Input
            label="Image"
            type="file"
            onChange={(e) => {
              setImg({ files: e.target.files, img: URL.createObjectURL(e.target.files[0]) });
            }}
          />
        </FormControl>
      </div>
      <div>
        <TextField
          sx={{ m: 3 }}
          label="Menu Name"
          id="text"
          placeholder="Enter the menu name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          sx={{ m: 3 }}
          label="Price"
          id="price"
          type="number"
          placeholder="Enter the Price"
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
      </div>
      <div className="flex gap-4 justify-end">
        <Button variant="contained" type="reset">
          Reset
        </Button>
        <Button variant="contained" type="submit">
          Save
        </Button>
      </div>
    </Box>
  );
};

export default ItemFormCreate;
