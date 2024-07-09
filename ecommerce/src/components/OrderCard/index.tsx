import React from 'react';

const OrderCard = ({ order }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <div className="font-bold text-gray-800 text-xl mb-2">Order ID: {order.id}</div>
        <p className="text-gray-700 text-base">Date: {order.date}</p>
        <p className="mt-2">
          <span className={`px-3 py-1 inline-block text-sm font-semibold ${order.status === 'completed' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'} rounded-full`}>
            {order.status}
          </span>
        </p>
      </div>
    </div>
  );
};

export default OrderCard;