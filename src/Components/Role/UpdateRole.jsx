import React, { useState } from 'react';
import { changeRole, updateRole } from '../../Api';

const UpdateRole = () => {
  const [role, setRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const roles = [
    { value: 'Admin', description: 'Has full access to all resources.' },
    {
      value: 'Editor',
      description: 'Can edit content but has limited access to settings.'
    },
    { value: 'Viewer', description: 'Can only view content.' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      await updateRole('', { roleName: role });
      await changeRole('changeRole', { roleName: role });
    } catch (error) {
      console.log(error);
      setErrorMessage('Failed to update the role. Please try again.');
    }
  };

  const selectedRoleDescription =
    roles.find((r) => r.value === role)?.description || '';

  return (
    <div className="flex justify-center min-h-screen bg-gray-800 text-white">
      <div
        className="w-full max-w-[250px] p-6 bg-gray-900
       rounded-lg shadow-md h-fit mt-16"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Update Role</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="role" className="block text-sm font-medium">
              Select Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border
               border-gray-600 rounded-md shadow-sm bg-gray-700
                text-white focus:ring-blue-500 focus:border-blue-500
                 sm:text-sm cursor-pointer"
              required
            >
              <option value="" disabled>
                Choose a role
              </option>
              {roles.map((r) => (
                <option key={r.value} value={r.value}>
                  {r.value}
                </option>
              ))}
            </select>
            {selectedRoleDescription && (
              <p className="mt-4 text-sm text-gray-400 text-center">
                {selectedRoleDescription}
              </p>
            )}
          </div>
          {errorMessage && (
            <p className="mb-4 text-sm text-red-500 text-center">
              {errorMessage}
            </p>
          )}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600
             rounded-md hover:bg-blue-700 focus:outline-none
              focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Update Role
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateRole;
