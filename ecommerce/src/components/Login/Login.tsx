'use client';
import { UserContext } from '@/context/userContext';
import { login } from '@/helpers/auth.helper';
import { validatedateLoginForm } from '@/helpers/formValidation';
import { LoginErrorProps } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react'

function Login ()  {
    const router = useRouter();
    const {signIn} = useContext(UserContext);
    const [signinValues, setSigninValues] = useState({
      email:"",
      password:"",
    })
    const [errorUser, setErrorUser] = useState<LoginErrorProps>({
      email:"",
      password:"",
    })

    const handleChange = (e: React.ChangeEvent <HTMLInputElement>) => {

    const {name, value} = e.target;
    setSigninValues({...signinValues, [name]: value});
    setErrorUser (validatedateLoginForm({...signinValues, [name]: value}));
    };
    const handleSubmit = async (e: React.
    FormEvent<HTMLFormElement>) => {
    e.preventDefault();

      const succes = await signIn(signinValues)
    };

    console.log(errorUser)

  return (
<section className="bg-gray-50 dark:bg-[#9ca3af]">
  <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
      <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Login
      </h2>
      <form className="mt-4 space-y-4 lg:mt-5 md:space-y-5" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email-address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo</label>
          <input
            id="email-address"
            name="email"
            type="email"
            value={signinValues.email}
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
            value={signinValues.password}
            required
            onChange={handleChange}
            placeholder="************"
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          {errorUser.password && <p className="text-red-500 text-sm">{errorUser.password}</p>}
        </div>
        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Iniciar sesión</button>
      </form>
    </div>
  </div>
</section>

  )

  
}

export default Login