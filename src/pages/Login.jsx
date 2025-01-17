import React, { useState } from 'react'

const Login = () => {

  const [state, setstate] = useState('Sign Up')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const OnsubmitHandler = async (event) => {
    event.preventDefault()
  }

  return (
    <>
      <form className='min-h-[60vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
          <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create Account" : "Login"}</p>
          <p>Please {state === 'Sign Up' ? " Sign Up" : "log in"}  to book appointment</p>

          {
            state === "Sign Up" &&
            <div className='w-full p-1'>
              <p>Full Name</p>
              <input className='border border-zinc-300 rounded w-full p-2 mt-1' onChange={(e) => setName(e.target.value)} value={name} type="text" required />
            </div>
          }

          <div className='w-full'>
            <p>Email</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' onChange={(e) => setEmail(e.target.value)} value={email} type="email" required />
          </div>
          <div className='w-full'>
            <p>Password</p>
            <input className='border border-zinc-300 rounded w-full p-2 mt-1' onChange={(e) => setPassword(e.target.value)} value={password} type="password" required />
          </div>

          <button className='bg-primary text-white w-full py-2 rounded-md text-base '>{state === 'Sign Up' ? "Create Account" : "Login"}</button>
          {
            state === "Sign Up" ?
              <p>Already have an account? <span onClick={() => setstate('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
              : <p>Create a new account? <span onClick={() => setstate('Sign Up')} className='text-primary underline cursor-pointer'>Click here</span></p>
          }
        </div>
      </form>
    </>
  )
}

export default Login
