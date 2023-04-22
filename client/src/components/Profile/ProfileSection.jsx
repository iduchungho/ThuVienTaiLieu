import { BiUser } from 'react-icons/bi';
import { MdEmail, MdOutlineDataSaverOn, MdPassword, MdCloudUpload, MdDeleteOutline } from 'react-icons/md';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { UpdateCustomer, UpdateCustomerAvt } from '../../utils/customer';

const ProfileSection = () => {
  const user = useSelector((state) => state.user.current);
  const [displayName, setDisplayName] = useState(user.first_name);
  const [email, setEmail] = useState(user.email_id);
  const [newPassword, setNewPassword] = useState('');
  const [imageFile, setImageFile] = useState(user.avatar);

  const updateEmail = (e) => {
    setEmail(e);
  };
  const updatePassword = (e) => {
    setNewPassword(e);
  };
  const uploadImage = (e) => {
    const imageFile = e.target.files[0];
    setImageFile(URL.createObjectURL(imageFile));
  };
  console.log(imageFile);

  const deleteImage = async () => {
    setImageFile('none');
    // const data1 = await UpdateCustomerAvt(JSON.stringify({ customer_id, imageFile }));
    const user1 = JSON.parse(localStorage.getItem('user'));
    user1.avatar = 'none';
    localStorage.setItem('user', JSON.stringify(user));
  };
  const saveChanges = async () => {
    const first_name = displayName;
    const last_name = displayName;
    const email_id = email;
    const password = newPassword;
    const customer_id = user.customer_id;

    const input = {
      ...user,
      customer_id,
      first_name,
      last_name,
      email_id,
      password,
      role: 'customer',
    };
    const img = new FormData();
    img.append('img', imageFile.files[0]);
    const data1 = await UpdateCustomerAvt(customer_id, img);
    // const data = await UpdateCustomer(JSON.stringify(input));
    console.log(customer_id);
    console.log(data1);
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <div className="border w-full  md:w-[60%]  flex border-gray-300 items-center rounded-lg p-4 flex-col justify-center gap-4  mt-8 mg:mt-10">
        <div className="w-full py-3 border-b border-gray-300 flex items-center gap-2">
          <BiUser className="text-xl text-gray-600" />
          <input
            type="text"
            required
            placeholder="Enter full name"
            autoFocus
            className="h-full w-full  bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </div>

        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdEmail className="text-gray-600 text-2xl" />
            <input
              type="text"
              required
              placeholder="Email"
              className="h-full w-full  bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
              value={email}
              onChange={(e) => updateEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center gap-3">
          <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
            <MdPassword className="text-gray-600 text-2xl" />
            <input
              type="password"
              required
              placeholder="New Password"
              className="h-full w-full  bg-transparent pl-2 text-textColor outline-none border-none placeholder:text-gray-400"
              onChange={(e) => updatePassword(e.target.value)}
            />
          </div>
        </div>
        {imageFile !== 'none' && imageFile !== {} && (
          <div className="relative h-full">
            <img src={imageFile.img} alt="Img Uploaded" className=" w-300 h-full object-cover" />
            <motion.button
              whileTap={{ scale: 1.1 }}
              whileHover={{ scale: 1.2 }}
              title="Remove Photo"
              className="absolute bottom-3 right-3 rounded-full p-2 md:p-5 bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out"
              onClick={() => deleteImage()}
            >
              <MdDeleteOutline className="text-white" />
            </motion.button>
          </div>
        )}
        {imageFile === 'none' && (
          <div className="flex justify-center items-center w-full h-full">
            <label
              htmlFor="file-upload"
              className="flex flex-col justify-center items-center w-full h-full rounded-lg  cursor-pointer"
            >
              <div className="flex flex-col justify-center items-center pt-5 pb-6 gap-2">
                <MdCloudUpload className="text-gray-500 text-3xl " />
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click here to upload</span>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400"> PNG, JPG or GIF (MAX. 800x400px)</p>
              </div>
              <input
                id="file-upload"
                name="uploadimage"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  setImageFile(() => ({ files: e.target.files, img: URL.createObjectURL(e.target.files[0]) }));
                }}
              />
            </label>
          </div>
        )}
      </div>

      <div className=" mt-10 items-center justify-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="ml-0  flex justify-center items-center gap-2 flex-row-reverse md:ml-auto w-full md:w-auto border-none outline-none rounded bg-orange-500 px-12 py-2 text-lg text-white"
          onClick={() => saveChanges()}
        >
          <MdOutlineDataSaverOn /> Save
        </motion.button>
      </div>
    </div>
  );
};

export default ProfileSection;
