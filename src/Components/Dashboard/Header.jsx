import icon from '../../assets/nik-781AooDi4H0-unsplash.jpg';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import { removeToken } from '../../Api';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await removeToken('logout');
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (endpoint) => {
    navigate(`/dashboard/${endpoint}`);
    handleClose();
  };

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <div
        className="container mx-auto flex justify-between
       items-center py-3 px-3"
      >
        <h1
          className="text-xl font-semibold tracking-wide
           cursor-pointer border-2 rounded-lg p-[2px]
            bg-indigo-300 hover:border-gray-400"
          onClick={() => navigate('/dashboard/home')}
        >
          🗄
        </h1>
        <span className="border-2 rounded-lg p-[2px] bg-yellow-300 text-lg">
          ⛰
        </span>
        <img
          src={icon}
          alt="Profile"
          className="w-9 h-9 rounded-full border-2
           border-gray-700 hover:border-gray-400 transition
            cursor-pointer border-2 rounded-lg p-[3px] bg-white"
          onClick={handleClick}
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          classes={{ paper: 'bg-gray-800 text-white rounded-lg shadow-lg' }}
        >
          <div className="flex flex-col px-8 py-4 items-center gap-1">
            <span
              className="text-md hover:text-gray-400
               transition cursor-pointer border-2 border-yellow-300
                rounded px-[3px] py-[1px] w-full text-center"
              onClick={() => handleNavigate('home')}
            >
              Home
            </span>
            <span
              className="text-md hover:text-gray-400
               transition cursor-pointer border-2 border-yellow-300
                rounded px-[3px] py-[1px] w-full text-center"
              onClick={() => handleNavigate('profile')}
            >
              Profile
            </span>
            <span
              className="text-md hover:text-gray-400 transition
               cursor-pointer border-2 border-yellow-300 rounded
                px-[3px] py-[1px] w-full text-center"
              onClick={() => handleNavigate('settings')}
            >
              Settings
            </span>
            <button
              className="text-md mt-2 bg-red-600 hover:bg-red-700
               text-white py-1 px-3 rounded transition shadow-md
                w-full text-center"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
