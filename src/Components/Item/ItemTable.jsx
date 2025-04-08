import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deleteItemList, getItemlist } from '../../utils/Store/ItemSlice';
import { deleteItem, getAllItems } from '../../Api';

const ItemTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.item.itemList) ?? [];
  const [items, setItems] = useState(data || []);
  const handleCreate = () => {
    navigate('/dashboard/item');
  };

  const handleUpdate = (item) => {
    try {
      navigate('/dashboard/updateItem', { state: item });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (item) => {
    try {
      await deleteItem(`${item._id}`);
      dispatch(deleteItemList(item));
    } catch (error) {}
  };

  useEffect(() => {
    const getItemApi = async () => {
      const itemData = await getAllItems('');
      dispatch(getItemlist(itemData?.data?.data));
    };
    if (!data.length) {
      getItemApi();
    }
  }, [data.length, dispatch]);

  useEffect(() => {
    setItems(data);
  }, []);

  return (
    <div
      className="p-4 sm:p-8 shadow-lg h-screen
     bg-gray-500 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
    >
      <div className="mb-4 flex gap-4 font-serif flex-wrap justify-end text-sm">
        <button
          onClick={handleCreate}
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-4 rounded"
        >
          Create
        </button>
      </div>
      <div className="overflow-x-auto">
        <table
          className="w-full bg-white dark:bg-gray-800
         border border-gray-200 dark:border-gray-700
          shadow-lg rounded-lg overflow-hidden"
        >
          <thead>
            <tr
              className="bg-gradient-to-r from-blue-500
             to-purple-500 text-white uppercase text-xs
              sm:text-sm leading-normal text-center"
            >
              <th className="py-2 sm:py-4 px-2 sm:px-6 ">Item Name</th>
              <th className="py-2 sm:py-4 px-2 sm:px-6 ">Category</th>
              <th className="py-2 sm:py-4 px-2 sm:px-6 ">Price</th>
              <th className="py-2 sm:py-4 px-2 sm:px-6 ">Stock</th>
              <th className="py-2 sm:py-4 px-2 sm:px-6 ">Actions</th>
            </tr>
          </thead>
          <tbody
            className="text-gray-700 dark:text-gray-300
           text-xs sm:text-sm text-center"
          >
            {items.map((item, index) => (
              <tr
                key={index}
                className={`border-b border-gray-200
                     dark:border-gray-700 transition duration-300 ease-in-out ${
                       index % 2 === 0
                         ? // eslint-disable-next-line max-len
                           'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700'
                         : // eslint-disable-next-line max-len
                           'bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700'
                     }`}
              >
                <td className="py-2 sm:py-4 px-2 sm:px-6 font-medium">
                  {item.itemName}
                </td>
                <td className="py-2 sm:py-4 px-2 sm:px-6">
                  {item.itemCategory}
                </td>
                <td className="py-2 sm:py-4 px-2 sm:px-6">${item.itemPrice}</td>
                <td className="py-2 sm:py-4 px-2 sm:px-6">{item.itemStock}</td>
                <td className="py-2 sm:py-4 px-2 sm:px-6 ">
                  <span
                    onClick={() => handleUpdate(item)}
                    className="bg-yellow-500 hover:bg-yellow-600
                     text-white py-1 px-2 sm:px-3 rounded cursor-pointer mr-2"
                  >
                    📝
                  </span>
                  <span
                    onClick={() => handleDelete(item)}
                    className="bg-red-500 hover:bg-red-600
                     text-white py-1 px-2 sm:px-3 rounded cursor-pointer"
                  >
                    🗑️
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ItemTable;
