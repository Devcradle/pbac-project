import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();
  return (
    <div
      className="p-6 bg-gray-800 text-gray-100\
     min-h-screen flex flex-col items-center"
    >
      <h1 className="text-3xl font-extrabold mb-6 text-gray-100">Settings</h1>
      <div className="mt-4 grid grid-cols-1 gap-4">
        <button
          className="px-6 py-3 bg-blue-600 text-white
           rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          onClick={() => navigate('/dashboard/table')}
        >
          Edit Permission Table
        </button>
        <button
          className="px-6 py-3 bg-green-600 text-white
           rounded-lg shadow-md hover:bg-green-700 transition duration-300"
          onClick={() => navigate('/dashboard/role')}
        >
          Create Role
        </button>
        <button
          className="px-6 py-3 bg-yellow-600 text-white
           rounded-lg shadow-md hover:bg-yellow-700 transition duration-300"
          onClick={() => navigate('/dashboard/updateRole')}
        >
          Update Role
        </button>
        <button
          className="px-6 py-3 bg-red-600 text-white rounded-lg
           shadow-md hover:bg-red-700 transition duration-300"
          onClick={() => navigate('/dashboard/delRole')}
        >
          Delete Role
        </button>
      </div>
    </div>
  );
};

export default Settings;
