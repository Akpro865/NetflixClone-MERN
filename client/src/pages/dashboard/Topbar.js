import NotificationsNoneIcon  from '@mui/icons-material/NotificationsNone'
import LanguageIcon  from '@mui/icons-material/Language'
import SettingsIcon  from '@mui/icons-material/Settings'
import profile from '../../assets/ak.jpg'

function Topbar() {
  return (
  	<div className='bg-white h-14 w-full sticky top-0 z-50'>
  	 <div className='h-full px-5 flex justify-between items-center'>
	    <div className='text-2xl font-bold text-gray-800'>
	     	AkDashboard
	    </div>
	    <div className='flex gap-2 items-center'>
	    	<NotificationsNoneIcon className='relative cursor-pointer'/>
	    	<span className='cursor-pointer absolute h-4 w-4 text-xs rounded-full flex items-center justify-center top-2 bg-sky-600'>2</span>
	    	<LanguageIcon className='cursor-pointer'/>
	    	<SettingsIcon className='cursor-pointer'/>
	    	<img src={profile} alt='profile' className='cursor-pointer h-8 w-8 rounded-full object-cover' />
	 	</div>
     </div>
    </div>
  )
}

export default Topbar