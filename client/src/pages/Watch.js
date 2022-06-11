import video1 from '../assets/custody.mp4'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'
import { useLocation, Link } from 'react-router-dom'

function Watch() {
	const location = useLocation()
	const movie = location.movie
  return (
  	<div className='w-screen h-screen'>
  	  <Link to='/'>
  	    <div className='flex items-center absolute top-2 left-2 text-white cursor-pointer z-50'>
  	      <ArrowBackOutlinedIcon />
          Back
        </div>
      </Link>
      <video src={movie.video} autoPlay={true} progress controls className='h-screen w-screen object-cover'/>
    </div>
  )
}

export default Watch