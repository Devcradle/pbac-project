import { useEffect, useState } from 'react';
import { delPermission, delRole, getRole } from '../../Api';
import { useNavigate } from 'react-router-dom';

const DeleteRole = () => {
  const [user, setUserData] = useState({});
  const navigate = useNavigate();
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    const getRoleApi = async () => {
      try {
        const data = await getRole('');
        setUserData(data?.data?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getRoleApi();
  }, []);

  const onDelete = async () => {
    try {
      await delRole('');
      await delPermission('');
      setIsDeleted(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      className="flex justify-center min-h-screen
     bg-gradient-to-br from-gray-800 via-gray-900 to-black p-4"
    >
      <div
        className="max-w-xs mx-auto bg-gray-800 shadow-md
       rounded-lg overflow-hidden border border-gray-700 h-fit mt-8 p-4"
      >
        {isDeleted || !user?.userName ? (
          <div className="p-4 text-center">
            <h2 className="text-xl font-semibold text-green-400">
              {isDeleted ? 'Role Deleted Successfully' : 'No Role Found'}
            </h2>
            {!isDeleted && (
              <button
                onClick={() => navigate('/dashboard/role')}
                className="mt-4 w-full bg-blue-500 text-white
                 py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                Create Role
              </button>
            )}
          </div>
        ) : (
          <div className="p-4">
            <h2 className="text-xl font-semibold text-white">
              {user?.userName}
            </h2>
            <p className="text-gray-400 mt-2">{user?.roleName}</p>
            <p className="text-gray-400 mt-2">{user?.description}</p>
            <p className="text-gray-400 mt-1">
              <span className="font-medium text-gray-300">Email:</span>{' '}
              {user?.email}
            </p>
            <div className="text-gray-400 mt-1">
              <span className="font-medium text-gray-300">Permissions:</span>
              <ul className="mt-2 list-disc list-inside space-y-1">
                {user?.permissions?.map((permission, index) => (
                  <li key={index} className="text-gray-400">
                    {permission?.action}
                  </li>
                ))}
              </ul>
            </div>
            <button
              onClick={() => onDelete(user?.roleName)}
              className="mt-4 w-full bg-red-500 text-white
               py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
            >
              Delete Role
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeleteRole;
