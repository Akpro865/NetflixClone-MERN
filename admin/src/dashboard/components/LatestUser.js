import './LatestUser.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUsers } from '../features/userSlice'

function LateaUser() {

  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)
  const { users } = useSelector(state => state.user)

  useEffect(() => {
    dispatch(getUsers(user))
  }, [])

  return (
  	<div className='user1 basis-1/3 m-5 p-5 rounded-xl'>

  	<h3 className='text-2xl font-semibold text-gray-600'>Latest Users</h3>
  	{ users.map((item, i) => (
  	 <div className='flex m-3 justify-between' key={i}>
  	  <img src={item.img} alt='userImg' className='object-cover rounded-full' />
  	  <div className='flex flex-col items-center'> 
  	   <span className=''>{item.username}</span>
  	   <span className='text-gray-600 text-sm'>{item.job}</span>
  	  </div>
  	  <button className='text-gray-400 cursor-pointer rounded border-none bg-white'>show</button>
  	 </div>
  	))	 
  	}
    <p className='text-xs text-gray-400'>All latest transactions...</p>
    </div>
  )
}

export default LateaUser