"use client";

import { UserContext } from "@/context/userContext";
import { useContext, useEffect } from "react";
import SignInAlert from "@/components/SignInAlert";
import OrderCard from "@/components/OrderCard";

function Orders() {
  const { getOrders, orders = [], isLogged } = useContext(UserContext);

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="pt-15 pb-40">
      {!isLogged ? (
        <SignInAlert />
      ) : (
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Orders</h1>
        <div className="grid grid-cols-3 gap-4">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
      )}
    </div>
  );
}

export default Orders;
