import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { updateItem } from '../../Api';

const UpdateItem = () => {
  const location = useLocation();
  const data = location.state || {};
  const [itemName, setItemName] = useState(data.itemName || '');
  const [itemCategory, setItemCategory] = useState(data.itemCategory || '');
  const [itemPrice, setItemPrice] = useState(data.itemPrice || '');
  const [itemStock, setItemStock] = useState(data.itemStock || '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateItem(`${data._id}`, {
        itemName,
        itemCategory,
        itemPrice,
        itemStock
      });
      setItemName('');
      setItemCategory('');
      setItemPrice('');
      setItemStock('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center min-h-screen bg-gray-700 text-white">
      <div
        className="w-full max-w-xs bg-gray-800
       rounded-lg shadow-md p-6 h-fit mt-8"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Update Item</h2>
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
              className="mt-1 block w-full px-4 py-2 border
               border-gray-600 rounded-md shadow-sm bg-gray-700
                text-white focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
            className="w-full bg-blue-500 text-white py-2
             px-4 rounded-md hover:bg-blue-600 focus:outline-none
              focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Update Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateItem;
