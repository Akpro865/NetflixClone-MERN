import loginimg from '../assets/login.jpg'
import netflixLogo from '../assets/netflix.png'
import './login.scss'
import { useState } from 'react'
import { login } from '../features/authSlice'
import { useDispatch } from 'react-redux'

function Login() {
    const [details, setDetails] = useState({
        email: "", password: ""
    })

    const dispatch = useDispatch()

    const { email, password } = details

    const onChange = (e) => {
        setDetails((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const onLogin = (e) => {
        e.preventDefault()
        const data = { email, password }
        dispatch(login(details))
    }
    
  return (
  	<div className='login w-screen h-screen relative'>
  	<div>
     <div className='flex py-5 px-12 items-center justify-between'>
     	<img src={netflixLogo} alt='logo' className='h-24'/>
     	
     </div>
    </div>
    <div className='flex h-full w-full top-0 left-0 items-center text-white flex-col absolute justify-center'>
     	<div className='max-w-lg h-4/6 p-7 bg-[#0b0b0b] rounded opacity-95'>
     		<h2 className='font-bold text-4xl pb-2'>Sign In</h2>
     		<form className='flex flex-col'>
     			<input name='email' type='text' placeholder='Email or phone number' className='m-2 p-3 rounded text-black' onChange={onChange}/>
     			<input name='password' type='password' placeholder='password' className='m-2 p-3 rounded text-black' onChange={onChange}/>
     			<button className='w-11/12 py-3 cursor-pointer px-4 rounded font-bold mx-auto  bg-red-600 m-2 mt-7' onClick={onLogin}>Sign In</button>
     			<div className='flex justify-between'>
	     			<div className='mb-9'>
	     			<input type='checkbox'/>
	     			<span className='ml-0.5'>Remember me</span>
	     			</div>
	     			<span>Need help?</span>
     			</div>
     		</form>
     	</div>
    </div>
    </div>
  )
}

export default Login