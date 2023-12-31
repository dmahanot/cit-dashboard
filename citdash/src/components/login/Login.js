import React, { useState } from 'react'



function Login() {

  const [username, setUname] = useState('')
  const [password, setPassword] = useState('')


  function check_In() {
     if(username === 'cbs' && password === 'netapp1!'){
      console.log('Logged in');
    }   
  }

  return (
    <div className="flex h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-gradient-to-b from-sky-200 to-cyan-100">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" >
          <div>
            <label for="username" className="block text-sm font-medium leading-6 text-gray-900">Username</label>
            <div className="mt-2">
              <input id="username" name="Uname" type="text" autocomplete="Uname" onChange={(e) => setUname(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-2xl ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>

            </div>
            <div className="mt-2">
              <input id="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button type="submit" onClick={() => check_In()} className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>

      </div>
    </div>

  );
}

export default Login