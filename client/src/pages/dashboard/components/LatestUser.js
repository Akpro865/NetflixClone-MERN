import './LatestUser.scss'
import { Users } from './dummydb'

function LateaUser() {
  return (
  	<div className='user1 basis-1/3 m-5 p-5 rounded-xl bg-teal-50 hover:bg-cyan-50 cursor-pointer'>

  	<h3 className='text-2xl font-semibold text-gray-600'>Latest Users</h3>
  	{ Users.map((user) => (
  	 <div className='flex m-3 justify-between'>
  	  <img src={user.img} alt='userImg' className='object-cover rounded-full' />
  	  <div className='flex flex-col items-center'> 
  	   <span className='text-gray-900 text'>{user.name}</span>
  	   <span className='text-gray-600'>{user.job}</span>
  	  </div>
  	  <button className='text-gray-400'>show</button>
  	 </div>
  	))	 
  	}
    <p className='text-xs text-gray-400'>All latest transactions...</p>
    </div>
  )
}

export default LateaUser