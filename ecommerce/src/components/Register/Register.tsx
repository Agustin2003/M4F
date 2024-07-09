'use client';
import { validatedateRegisterForm } from '@/helpers/formValidation';
import { RegisterErrorProps, } from '@/types';
import { register } from '@/helpers/auth.helper';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '@/context/userContext';

function Register () {
    const {signUp} = useContext(UserContext)
    const router = useRouter();
    const [signupValues, setSignUpValues] = useState({
        name: "",
        phone: "",
        address: "",
        email: "",
        password: "",
    });
    const [errorUser, setErrorUser] = useState<RegisterErrorProps>({
        name: "",
        phone: "",
        address: "",
        email: "",
        password: "",
        role: "",
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const {name, value} = event.target;
        setSignUpValues({
            ...signupValues,
            [name]: value,
        });
        setErrorUser(validatedateRegisterForm({...signupValues, [name]: value}))
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const user ={
          email:signupValues.email,
          password: signupValues.password,
          name: signupValues.name,
          phone: signupValues.phone,
          address: signupValues.address,
        }

        const success = await signUp(user)
        if(success)router.push("/")
        if(!success) alert("Check your info")

    };



    return (
        <section className="bg-gray-50 dark:bg-[#9ca3af]">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
              <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Registro
              </h2>
              <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={signupValues.name}
                    required
                    onChange={handleChange}
                    placeholder="Nombre"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errorUser.name && <p className="text-red-500 text-sm">{errorUser.name}</p>}
                </div>
                <div>
                  <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teléfono</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={signupValues.phone}
                    required
                    onChange={handleChange}
                    placeholder="Teléfono"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errorUser.phone && <p className="text-red-500 text-sm">{errorUser.phone}</p>}
                </div>
                <div>
                  <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección</label>
                  <input
                    id="address"
                    name="address"
                    type="text"
                    value={signupValues.address}
                    required
                    onChange={handleChange}
                    placeholder="Dirección"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errorUser.address && <p className="text-red-500 text-sm">{errorUser.address}</p>}
                </div>
                <div>
                  <label htmlFor="email-address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    value={signupValues.email}
                    required
                    onChange={handleChange}
                    placeholder="example@gmail.com"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errorUser.email && <p className="text-red-500 text-sm">{errorUser.email}</p>}
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={signupValues.password}
                    required
                    onChange={handleChange}
                    placeholder="************"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                  {errorUser.password && <p className="text-red-500 text-sm">{errorUser.password}</p>}
                </div>
                <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Registrarse</button>
              </form>
            </div>
          </div>
        </section>
      );
    };

export default Register;
