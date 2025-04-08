import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { editUser, getUser } from '../../Api';
import { useDispatch } from 'react-redux';
import { getUserlist } from '../../utils/Store/UserSlice';

const Profile = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => store.user.userList);
  const [email, setEmail] = useState(data.email || '');
  const [password, setPassword] = useState('*'.repeat(8));
  const [name, setName] = useState(data.userName);

  const [isEditing, setIsEditing] = useState(false);

  // const handleInputChange = (e) => {};

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSubmit = async () => {
    if (
      !/^[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{8,}$/.test(password) &&
      password !== '*'.repeat(8)
    ) {
      const data = await editUser('', { email, password, userName: name });
      console.log(data);
    } else {
      const data = await editUser('', { email, userName: name });
      console.log(data);
    }
  };

  useEffect(() => {
    const callUserApi = async () => {
      const data = await getUser('');
      dispatch(getUserlist(data?.data?.data));
    };
    !data.length && callUserApi();
  }, [dispatch]);

  return (
    <div
      className="min-h-screen bg-gradient-to-br
     from-gray-800 via-gray-900 to-black flex justify-center a"
    >
      <div
        className="bg-gray-800 p-8 rounded-3xl
       shadow-2xl border-4 border-gray-600 h-fit mt-8 w-84"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6 text-yellow-400 font-serif">
            My Profile
          </h1>
          <div className="w-full">
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Username
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={!isEditing}
              className={`w-full p-3 rounded-lg bg-gray-700 text-gray-200 
                                focus:outline-none
                                 focus:ring-2 focus:ring-yellow-400 ${
                                   isEditing
                                     ? 'border border-yellow-400'
                                     : 'border-none'
                                 }`}
            />
          </div>
          <div className="w-full mt-4">
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={!isEditing}
              className={`w-full p-3 rounded-lg bg-gray-700 text-gray-200 
                                focus:outline-none
                                 focus:ring-2 focus:ring-yellow-400 ${
                                   isEditing
                                     ? 'border border-yellow-400'
                                     : 'border-none'
                                 }`}
            />
          </div>
          <div className="w-full mt-4">
            <label className="block text-sm font-medium mb-2 text-gray-300">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={!isEditing}
              className={`w-full p-3 rounded-lg bg-gray-700 text-gray-200 
                                focus:outline-none
                                 focus:ring-2 focus:ring-yellow-400 ${
                                   isEditing
                                     ? 'border border-yellow-400'
                                     : 'border-none'
                                 }`}
            />
          </div>
          {isEditing ? (
            <button
              onClick={handleSubmit}
              className="mt-6 bg-green-500 hover:bg-green-600 text-white
                            font-bold py-2 px-6
                             rounded-full shadow-lg transition-transform
                            transform hover:scale-105"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleEditToggle}
              className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-white
                            font-bold py-2 px-6
                            rounded-full shadow-lg transition-transform
                            transform hover:scale-105"
            >
              Edit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
