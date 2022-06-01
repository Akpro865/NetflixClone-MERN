import video1 from '../assets/custody.mp4'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined'

function Watch() {
  return (
  	<div className='w-screen h-screen'>
  	 <div className='flex items-center absolute top-2 left-2 text-white cursor-pointer z-50'>
  	  <ArrowBackOutlinedIcon />
      Back
     </div>
     <video src={video1} autoPlay={true} progress controls className='h-screen w-screen object-cover'/>
    </div>
  )
}

export default Watch