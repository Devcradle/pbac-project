import React, { useState } from 'react';
import { createItem } from '../../Api';
import { useDispatch } from 'react-redux';
import { updateItemList } from '../../utils/Store/ItemSlice';

const CreateItem = () => {
  const dispatch = useDispatch();
  const [itemName, setItemName] = useState('');
  const [itemCategory, setItemCategory] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemStock, setItemStock] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await createItem('', {
        itemName,
        itemCategory,
        itemPrice,
        itemStock
      });
      dispatch(updateItemList(data?.data?.data));
      setItemName('');
      setItemCategory('');
      setItemPrice('');
      setItemStock('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-700 text-white">
      <div
        className="w-full max-w-xs bg-gray-800
       rounded-lg shadow-md p-6 h-fit mt-8"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Create Item</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="itemName"
              className="block text-sm font-medium text-gray-300"
            >
              Item Name
            </label>
            <input
              type="text"
              id="itemName"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              className="mt-1 block w-full px-4 py-2
               border border-gray-600 rounded-md shadow-sm
                bg-gray-700 text-white focus:ring-blue-500
                 focus:border-blue-500 sm:text-sm"
              placeholder="Enter item name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="itemCategory"
              className="block text-sm font-medium text-gray-300"
            >
              Item Category
            </label>
            <input
              type="text"
              id="itemCategory"
              value={itemCategory}
              onChange={(e) => setItemCategory(e.target.value)}
              className="mt-1 block w-full px-4 py-2
               border border-gray-600 rounded-md shadow-sm
                bg-gray-700 text-white focus:ring-blue-500
                 focus:border-blue-500 sm:text-sm"
              placeholder="Enter item category"
              required
            />
          </div>
          <div>
            <label
              htmlFor="itemPrice"
              className="block text-sm font-medium text-gray-300"
            >
              Item Price
            </label>
            <input
              type="text"
              id="itemPrice"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
              className="mt-1 block w-full px-4 py-2
               border border-gray-600 rounded-md shadow-sm
                bg-gray-700 text-white focus:ring-blue-500
                 focus:border-blue-500 sm:text-sm"
              placeholder="Enter item price"
              required
            />
          </div>
          <div>
            <label
              htmlFor="itemStock"
              className="block text-sm font-medium text-gray-300"
            >
              Item Stock
            </label>
            <input
              type="item"
              id="itemStock"
              value={itemStock}
              onChange={(e) => setItemStock(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border
               border-gray-600 rounded-md shadow-sm bg-gray-700
                text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter item stock"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white
             py-2 px-4 rounded-md hover:bg-blue-600
              focus:outline-none focus:ring-2 focus:ring-blue-500
               focus:ring-offset-2"
          >
            Create Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateItem;
