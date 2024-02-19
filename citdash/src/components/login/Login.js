import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import MyBackgroundImage from "../../images/bg-logo.jpg"



function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    let login = localStorage.getItem('login');
    e.preventDefault();
    if (username === "cituser" && password === "12345") {
      localStorage.setItem('login', true)
      navigate("/dashboard");
    }
    else {
      alert("incorrect credentials")
      setUsername('');
      setPassword('');
      localStorage.removeItem('login')
      document.getElementById("loginfm").reset();
      navigate("/")
    }
  }


  // b.D-?I?5iL;onwcc
  return (
    <div style={
      { backgroundImage: `url(${MyBackgroundImage})`, 
      backgroundRepeat: 'no-repeat',
      
      }} className="flex h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-cover bg-opacity-95">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-5xl font-bold leading-9 tracking-tight text-white">Sign in </h2>
      </div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form id='loginfm' className="space-y-6" onSubmit={handleLogin} autoComplete='off'>
          <div>
            <label for="username" className="block text-xl font-medium leading-6 text-white">Username</label>
            <div className="mt-2">
              <input id="username" name="Username" type="text" onChange={(e) => setUsername(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-2xl ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label for="password" className="block text-xl font-medium leading-6 text-white">Password</label>
            </div>
            <div className="mt-2">
              <input id="password" name="password" type="password" onChange={(e) => setPassword(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-yellow-600 px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
          </div>
        </form>

      </div>
    </div>

  );
}

export default Login