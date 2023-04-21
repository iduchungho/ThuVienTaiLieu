import { BiUser } from 'react-icons/bi';
import { MdEmail, MdOutlineDataSaverOn, MdPassword } from 'react-icons/md';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { UpdateCustomer } from '../../utils/customer';

const ProfileSection = () => {
  const user = useSelector((state) => state.user.current);
  const [displayName, setDisplayName] = useState(user.first_name);
  const [email, setEmail] = useState(user.email_id);
  const [newPassword, setNewPassword] = useState('');

  const updateEmail = (e) => {
    setEmail(e);
  };
  const updatePassword = (e) => {
    setNewPassword(e);
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
    const data = await UpdateCustomer(JSON.stringify(input));
    console.log(data);
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
      </div>

      <div className=" mt-10 items-center justify-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="ml-0 flex justify-center items-center gap-2 flex-row-reverse md:ml-auto w-full md:w-auto border-none outline-none rounded bg-orange-500 px-12 py-2 text-lg text-white"
          onClick={() => saveChanges()}
        >
          <MdOutlineDataSaverOn /> Save
        </motion.button>
      </div>
    </div>
  );
};

export default ProfileSection;
