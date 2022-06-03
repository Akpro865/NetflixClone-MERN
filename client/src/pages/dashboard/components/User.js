import profile from '../../../assets/ak.jpg'
import PermIdentityIcon from '@mui/icons-material/PermIdentity'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday'
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import PublishIcon from '@mui/icons-material/Publish'
import LocationSearchingIcon from '@mui/icons-material/LocationSearching'
import './user.scss'

function User() {
  return (
      <div className='basis-4/5 m-2'>
      	<div className='flex justify-between p-3'>
          <h2 className='text-3xl font-bold'>Edit User</h2>
          <button className='py-1 px-2 font-semibold rounded bg-teal-500 hover:bg-teal-600 text-white'>Create</button>
        </div>
      	<div className='flex '>
	       <div className='detail1 basis-1/3 p-5 m-2 rounded'>
	         <div className='flex py-3'>
	           <img src={profile} alt='profile' className='mr-4 w-10 h-10 object-cover rounded-full'/>
	           <div className='flex flex-col'>
	             <span className='font-semibold'>Priya</span>
	             <span className='text-gray-600'>Web Developer</span>
	           </div>
	         </div>
	         <div>
	           <h2 className='p-2 text-gray-700'>User Details</h2>
	           <div className='p-2 flex items-center'>
	             <PermIdentityIcon className='mr-3 text-gray-700'/>
	             <span>Ajithkumar</span>
	           </div>
	           <div className='p-2 flex items-center'>
	              <CalendarTodayIcon className='mr-3 text-gray-700'/>
	              <span>16.0.2001</span>
	           </div>
	           <h2 className='p-2 text-gray-700'>User Details</h2>
	           <div className='p-2 flex items-center'>
	             <PhoneAndroidIcon className='mr-3 text-gray-700'/>
	             <span>+91 934430534</span>
	           </div>
	           <div className='p-2 flex items-center'>
	             <MailOutlineIcon className='mr-3 text-gray-700'/>
	             <span>prokumar@gmail.com</span>
	           </div>
	           <div className='p-2 flex items-center'>
	             <LocationSearchingIcon className='mr-3 text-gray-700'/>
	             <span>karaikudy, India</span>
	           </div>
	         </div>
	       </div>
	       <div className='update1 basis-2/3 p-6 m-2 rounded'>
	       	 <h2 className='p-3 text-2xl font-semibold'>Edit</h2>
	       	 <div className='flex justify-between font-medium'>
		       	 <div className=''>
		       	   <form>
		       	     <div className='p-1 flex flex-col'>
		       	       <label className='text-xl text-gray-700'>Username</label>
		       	       <input type='text' placeholder='Chris Hemsworth' className='p-1 border-b-2 hover:border-indigo-400 border-indigo-200'/>
		       	     </div>
		       	     <div className='p-1 flex flex-col'>
		       	       <label className='text-xl text-gray-700'>Full Name</label>
		       	       <input placeholder='Chris John' className='p-1 border-b-2 hover:border-indigo-400 border-indigo-200'/>
		       	     </div>
		       	     <div className='p-1 flex flex-col'>
		       	       <label className='text-xl text-gray-700'>Email</label>
		       	       <input type='email' placeholder='prokumar@gmail.com' className='p-1 border-b-2 hover:border-indigo-400 border-indigo-200'/>
		       	     </div>
		       	     <div className='p-1 flex flex-col'>
		       	       <label className='text-xl text-gray-700'>Phone</label>
		       	       <input placeholder='+91 956780321' className='p-1 border-b-2 hover:border-indigo-400 border-indigo-200'/>
		       	     </div>
		       	     <div className='p-1 flex flex-col'>
		       	       <label className='text-xl text-gray-700'>Address</label>
		       	       <input placeholder='TamilNadu | India' className='p-1 border-b-2 hover:border-indigo-400 border-indigo-200'/>
		       	     </div>
		       	   </form>
		       	 </div>
		       	 <div className='flex flex-col justify-between'>
			       	 <div className='flex items-center'>
			       	   <img src={profile} alt='profile' className='mr-3 h-28 w-28 object-cover rounded' />
			       	   <label htmlFor='file'><PublishIcon className='cursor-pointer'/></label>
			       	   <input type='file' id='file' className='hidden'/>
			       	 </div>
			       	 <button className='bg-blue-600 rounded cursor-pointer py-1 px-2 text-white font-semibold hover:bg-blue-700'>update</button>
			     </div>
		       </div>

		    </div>
	    </div>
      </div>
  )
}

export default User