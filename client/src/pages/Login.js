import liginimg from '../assets/login.jpg'
import netflixLogo from '../assets/netflix.png'
import './login.scss'


function Login() {

  return (
  	<div className='login w-screen h-screen relative'>
  	<div>
     <div className='flex py-5 px-12 items-center justify-between'>
     	<img src={netflixLogo} alt='logo' className='h-24'/>
     	
     </div>
    </div>
    <div className='flex h-full w-full top-0 left-0 items-center text-white flex-col absolute justify-center'>
     	<div className='max-w-md h-5/6 p-7 bg-[#0b0b0b] rounded opacity-95'>
     		<h2 className='font-bold text-4xl pb-2'>Sign In</h2>
     		<form className='flex flex-col'>
     			<input type='text' placeholder='Email or phone number' className='m-2 p-3 rounded text-black'/>
     			<input  type='password' placeholder='password' className='m-2 p-3 rounded text-black'/>
     			<button className='w-11/12 py-3 px-4 rounded font-bold mx-auto  bg-red-600 m-2 mt-7'>Sign In</button>
     			<div className='flex justify-between'>
	     			<div className='mb-9'>
	     			<input type='checkbox'/>
	     			<span className='ml-0.5'>Remember me</span>
	     			</div>
	     			<span>Need help?</span>
     			</div>
     			<h4 className='text-gray-400 p-2'>New to Netflix?<a className='text-white font-semibold text-xl'>Sign Up now</a></h4>
     			<p className='text-gray-400'>This page is proexted by Google reCAPTHA to ensure
     			you are not a bot.<a className='text-sky-600'> Learn more.</a>
     			</p>
     		</form>
     	</div>
    </div>
    </div>
  )
}

export default Login