import registerimg from '../assets/register.jpg'
import netflixLogo from '../assets/netflix.png'
import './register.scss'
import { useState, useRef } from 'react'

function Register() {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const emailRef = useRef()
	const passwordRef = useRef()

	const handleStart = () => {
		setEmail(emailRef.current.value)
	}
	const handleFinish = () => {
		setPassword(passwordRef.current.value)
	}
  return (
  	<div className='register w-screen h-screen relative'>
  	<div>
     <div className='flex py-5 px-12 items-center justify-between'>
     	<img src={netflixLogo} alt='logo' className='h-24'/>
     	<button className='px-5 py-2 bg-red-600 font-semibold text-white border-none rounded hover:bg-red-700'>SignIn</button>
     </div>
    </div>
    <div className='flex h-full w-full top-0 left-0 items-center text-white flex-col absolute justify-center'>
     	<h1 className='text-white text-5xl p-3'>Unlimited Movies, TV shows, and more</h1>
     	<h2 className='text-white text-3xl p-3'>Watch anytime, Cancel anytime.</h2>
     	<p className='text-white text-xl p-4'>Ready to watch? Enter your email to create or restart your membership.</p>

     	{ !email ? (
	     	<div className='w-1/2 flex justify-between bg-white h-14 rounded' >
	     		<input type='email' placeholder='Enter your email' className='text-black font-medium text-xl rounded basis-9/12 border-none items-center' ref={emailRef}/>
	     		<button className='basis-3/12 bg-red-600 font-semibold rounded-tr rounded-br' onClick={handleStart}>Get Started!</button>
	     	</div>
     	) : 
	     	<div className='w-1/2 flex justify-between bg-white h-14 rounded' >
	     		<input type='password' placeholder='Enter your password' className='text-black font-medium text-xl rounded basis-9/12 border-none items-center' ref={passwordRef}/>
	     		<button className='basis-3/12 bg-red-600 font-semibold rounded-tr rounded-br' onClick={handleFinish}>Start</button>
	     	</div>
     	}
    </div>
    </div>
  )
}

export default Register