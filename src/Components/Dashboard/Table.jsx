import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPermissions, updatePermission } from '../../Api';
import { getPermissionList } from '../../utils/Store/PermissionSlice';

const permissionNames = ['Read', 'Write', 'Delete'];

const Table = () => {
  const [roles, setRoles] = useState([]);
  const dispatch = useDispatch();
  const roleData = useSelector((store) => store.permission.permissionList);
  const [editingRoleIndex, setEditingRoleIndex] = useState(null);

  const togglePermission = (roleIndex, action) => {
    setRoles((prevRoles) =>
      prevRoles.map((role, rIndex) =>
        rIndex === roleIndex
          ? {
              ...role,
              permissions: role.permissions.map((permission) =>
                permission.action === action
                  ? { ...permission, enabled: !permission.enabled }
                  : permission
              )
            }
          : role
      )
    );
  };

  const saveChanges = async (role) => {
    try {
      await updatePermission(`${role._id}`, { permissions: role.permissions });
      setEditingRoleIndex(null);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getRolesApi = async () => {
      const data = await getAllPermissions('all');
      dispatch(getPermissionList(data?.data?.data));
    };

    if (!roleData?.length) {
      getRolesApi();
    } else if (!roles.length) {
      // Only update roles if it's empty
      const updatedRoles = roleData.map((role) => ({
        ...role,
        permissions: permissionNames.map((permissionName) => {
          const existingPermission = role.permissions?.find(
            (perm) => perm.action === permissionName.toLowerCase()
          );
          return existingPermission
            ? existingPermission
            : { action: permissionName.toLowerCase(), enabled: false };
        })
      }));
      setRoles(updatedRoles);
    }
  }, [dispatch, roleData, roles.length]);

  return (
    <div
      className="p-6 bg-gradient-to-r from-gray-100 to-gray-200
     dark:from-gray-800 dark:to-gray-900 flex justify-center
      h-screen rounded-lg"
    >
      <div className="w-full overflow-x-auto">
        <table
          className="table-auto w-full border-collapse
         border border-gray-300 shadow-xl rounded-lg overflow-hidden
          dark:border-gray-700 h-fit"
        >
          <thead>
            <tr
              className="bg-gradient-to-r from-blue-500
             to-blue-600 text-white dark:from-blue-700 dark:to-blue-800"
            >
              <th
                className="px-6 py-3 border border-gray-300
               dark:border-gray-700 text-center"
              >
                Name
              </th>
              <th
                className="px-6 py-3 border border-gray-300
               dark:border-gray-700 text-center"
              >
                Email
              </th>
              <th
                className="px-6 py-3 border border-gray-300
               dark:border-gray-700 text-center"
              >
                Role
              </th>
              {permissionNames.map((permissionName, index) => (
                <th
                  key={index}
                  className="px-6 py-3 border border-gray-300
                   dark:border-gray-700 text-left"
                >
                  {permissionName}
                </th>
              ))}
              <th
                className="px-6 py-3 border border-gray-300
               dark:border-gray-700 text-left"
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {roles?.map((role, roleIndex) => (
              <tr
                key={roleIndex}
                className="bg-white dark:bg-gray-700 hover:bg-gray-100
                 dark:hover:bg-gray-600 transition-colors h-auto text-center"
              >
                <td
                  className="px-6 py-4 border border-gray-300
                 dark:border-gray-700 font-medium text-gray-800
                  dark:text-gray-200 word-break-all"
                >
                  {role.userName}
                </td>
                <td
                  className="px-6 py-4 border border-gray-300
                 dark:border-gray-700 text-sm text-gray-800
                  dark:text-gray-200 break-words"
                >
                  {role.email}
                </td>
                <td
                  className="px-6 py-4 border border-gray-300
                 dark:border-gray-700 text-sm text-gray-800
                  dark:text-gray-200 break-words"
                >
                  {role.roleName}
                </td>
                {role.permissions?.map((permission, permissionIndex) => (
                  <td
                    key={permissionIndex}
                    className="px-6 py-4 border border-gray-300
                     dark:border-gray-700 text-center"
                  >
                    {editingRoleIndex === roleIndex ? (
                      <input
                        type="checkbox"
                        checked={permission.enabled}
                        onChange={() =>
                          togglePermission(roleIndex, permission.action)
                        }
                        className="w-5 h-5 text-blue-500 rounded
                         focus:ring focus:ring-gray-300
                          dark:focus:ring-gray-600 rounded-2xl"
                      />
                    ) : (
                      <span>{permission.enabled ? '✔️' : '❌'}</span>
                    )}
                  </td>
                ))}
                <td
                  className="px-6 py-4 border border-gray-300
                 dark:border-gray-700 text-center"
                >
                  <button
                    onClick={() =>
                      editingRoleIndex === roleIndex
                        ? saveChanges(role)
                        : setEditingRoleIndex(roleIndex)
                    }
                    className="px-2 py-2 bg-blue-500 text-white rounded
                     hover:bg-blue-600 transition min-w-20 cursor-pointer"
                  >
                    {editingRoleIndex === roleIndex ? 'Save' : 'Edit'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
