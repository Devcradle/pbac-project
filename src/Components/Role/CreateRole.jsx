import React, { useEffect, useState } from 'react';
import { createPermission, createRole, getUser } from '../../Api';
import { useDispatch, useSelector } from 'react-redux';
import { getRolelist } from '../../utils/Store/RoleSlice';
import { getUserlist } from '../../utils/Store/UserSlice';
import { getPermissionList } from '../../utils/Store/PermissionSlice';
// import { getRolelist, updateRolelist } from "../../utils/Store/RoleSlice";

const Role = () => {
  const [selectedRole, setSelectedRole] = useState(null);
  const dispatch = useDispatch();
  const [message, setMessage] = useState('');
  const userData = useSelector((store) => store.user.userList);

  const roles = [
    {
      name: 'Admin',
      description: 'Has full access to all resources and settings.'
    },
    {
      name: 'Editor',
      description: 'Can edit content but cannot manage settings.'
    },
    {
      name: 'Viewer',
      description: 'Can view content but cannot make changes.'
    },
    { name: 'Contributor', description: 'Can contribute content for review.' }
  ];

  const handleChange = (event) => {
    const role = roles.find((role) => role.name === event.target.value);
    setSelectedRole(role || null);
  };

  const handleSubmit = async () => {
    if (selectedRole) {
      try {
        setMessage('');
        const data = await createRole('', {
          userName: userData?.userName,
          email: userData?.email,
          roleName: selectedRole.name,
          description: selectedRole.description
        });
        dispatch(getRolelist(data?.data?.data));
        const permData = await createPermission('', {
          userName: userData?.userName,
          email: userData?.email,
          roleName: selectedRole.name
        });
        dispatch(getPermissionList(permData?.data?.data));
        setMessage('Role created successfully!');
      } catch (error) {
        setMessage('Request failed!');
      }
    }
  };

  useEffect(() => {
    const getUserApi = async () => {
      const userData = await getUser('');
      dispatch(getUserlist(userData?.data?.data));
    };
    getUserApi();
  }, [dispatch]);

  return (
    <div
      className="flex justify-center pt-10
    min-h-screen bg-gray-800 text-gray-200"
    >
      <div
        className="flex flex-col items-center
      p-6 bg-gray-900 text-gray-200 rounded-lg
       shadow-lg h-fit w-full max-w-[250px]"
      >
        <label
          htmlFor="role-select"
          className="mb-3 text-lg font-medium text-gray-300"
        >
          Select a Role:
        </label>
        <div className="relative w-full mb-4">
          <select
            id="role-select"
            className="w-full p-2 text-gray-200
             bg-gray-700 border border-gray-600
             rounded-md shadow-sm appearance-none
              focus:outline-none focus:ring-2
               focus:ring-blue-400 focus:border-blue-400 cursor-pointer"
            value={selectedRole?.name || ''}
            onChange={handleChange}
          >
            <option value="" disabled>
              Choose a role
            </option>
            {roles.map((role, index) => (
              <option
                key={index}
                value={role.name}
                className="bg-gray-700 text-gray-200"
              >
                {role.name}
              </option>
            ))}
          </select>
          <div
            className="absolute inset-y-0 right-0
          flex items-center px-2 pointer-events-none"
          >
            <svg
              className="w-5 h-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1
                 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        {selectedRole && (
          <div className="mb-4 text-center">
            <p className="text-lg font-semibold text-blue-400">
              {selectedRole.name}
            </p>
            <p className="text-sm text-gray-400">{selectedRole.description}</p>
          </div>
        )}
        <button
          onClick={handleSubmit}
          className="px-4 py-2 mt-4 text-sm
           font-medium text-gray-900 bg-blue-400
            rounded-md shadow hover:bg-blue-500
             focus:outline-none focus:ring-2
              focus:ring-blue-400 focus:ring-offset-2"
        >
          Submit
        </button>
        <p className="mt-4 text-sm font-medium text-green-400">{message}</p>
      </div>
    </div>
  );
};

export default Role;
