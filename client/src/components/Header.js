import netflixLogo from '../assets/netflix.png'
import profile from '../assets/ak.jpg'
import SearchIcon from '@mui/icons-material/Search'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import './Header.scss'
import { useState } from 'react'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => (window.onscroll = null)
    }
  return (
    <div className={`px-14 fixed h- top-0 text-xl text-white p-5 flex justify-between navbar ${isScrolled ? "navbar scrolled" : "navbar"}`}>
    	<div className='flex items-center'>    		
    		<img className='h-8' src={netflixLogo} alt='netflixLogo'/>    		
    		<div>
    			<span className='m-3'>Home</span>
    			<span className='m-3'>Movies</span>
    			<span className='m-3'>Series</span>
    			<span className='m-3'>Popular</span>
    			<span className='m-3'>MyList</span>
    		</div>
    	</div>
    	<div className='flex items-center'>
    		<SearchIcon className='cursor-pointer'/>
    		<span className='ml-2 cursor-pointer'>KID</span>
    		<NotificationsNoneIcon className='ml-2 cursor-pointer'/>
    		<img className='h-7 w-7 ml-2 rounded-full object-cover cursor-pointer' src={profile}/>
    		<div className='profile'>
	    		<ArrowDropDownIcon className='mr-4 ml-3 cursor-pointer'/>
	    		<div className='options m-5'>
	    			<span>settings</span>
	    			<span>profile</span>
	    			<span>Logout</span>
	    		</div>
    		</div>
    	</div>
    </div>
  )
}

export default Header