import React from 'react';
import Table from '../Dashboard/Table';

const userPermissions = new Set(['read', 'write']);
const requiredPermission = 'read';

const Permission = () => {
  const hasPermission = userPermissions.has(requiredPermission);
  const children = <Table />;

  return hasPermission ? (
    <div className="p-4 bg-gray-700 text-white h-full">{children}</div>
  ) : (
    <div className="p-4 bg-red-100 text-red-700 font-semibold rounded">
      You do not have the required permission to view this content.
    </div>
  );
};

export default Permission;
