"use client";
import React, {useContext} from "react";
import { UserContext } from "@/context/userContext"; 
import SignInAlert from "@/components/SignInAlert";
import Link from 'next/link';

function UserDashboard() {
    const {isLogged, user } = useContext(UserContext);
    return (
        <div className="h-full">
            {!isLogged? (
            <SignInAlert />
            ):(
        <div className="flex justify-center pt-20 pb-20 bg-gray-300">
    <div className="w-full  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-end px-4 pt-4">
        <span id="dropdownButton" data-dropdown-toggle="dropdown" className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5">
          <span className="sr-only">Open dropdown</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
            <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
          </svg>
        </span>
        <div id="dropdown" className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
          <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</button>
            </li>
            <li>
              <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</button>
            </li>
            <li>
              <button className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center pb-10">
        <div className="relative w-24 h-24 mb-3 rounded-full overflow-hidden shadow-lg">
          <img src="https://thumbs.dreamstime.com/b/vector-de-icono-perfil-usuario-s%C3%ADmbolo-retrato-avatar-logo-la-persona-forma-plana-silueta-negra-aislada-sobre-fondo-blanco-196482128.jpg" alt="Bonnie image"  />
        </div>
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{user.user.name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{user?.user.email}</span>
        <span className="text-sm text-gray-500 dark:text-gray-400">{user?.user.phone}</span>
        <div className="flex mt-4 md:mt-6">
            <Link href="/dashboard/orders">
                <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ordenes de compra</span>
            </Link>
        </div>
      </div>
    </div>
</div>
)}
</div>
);
}
export default UserDashboard