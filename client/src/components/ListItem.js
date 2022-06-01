import thorl from '../assets/thorl.jpg'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined'
import AddIcon from '@mui/icons-material/Add'
import './listItem.scss'
import { useState } from 'react'
import video1 from '../assets/custody.mp4'

function ListItem({index}) {
	const [isHovered, setIsHovered] = useState(false)
  return (
  	<div onMouseEnter={()=>setIsHovered(true)}
  	 onMouseLeave={()=>setIsHovered(false)}
  	 style={{left: isHovered && index * (224 - 48) + (index * 2)}}
  	 className='listItem h-32 w-56 cursor-pointer bg-white mr-1 rounded overflow-hidden hover:w-80 hover:h-76 hover:absolute hover:-top-32'>
    	<img src={thorl} alt='all' className='w-full f-full object-cover'/>
    	
    	{isHovered && (
    	<> 
    	<video src={video1} autoPlay={true} loop className='vid w-full object-cover absolute top-0 left-0'/>    	
		<div className='flex flex-col p-2'>
			<div className='text-white flex mr-2 text-2xl font-bold'>
				<PlayArrowIcon className='border rounded-full mr-2 p-1 hover:bg-gray-400 hover:text-black'/>
				<AddIcon className='border rounded-full mr-2 p-1 hover:bg-gray-400 hover:text-black'/>
				<ThumbUpOutlinedIcon className='border rounded-full mr-2 p-1 hover:bg-gray-400 hover:text-black'/>
				<ThumbDownOutlinedIcon className='border rounded-full mr-2 p-1 hover:bg-gray-400 hover:text-black'/>
			</div>
			<div className='text-gray-400 flex my-px'>
				<span>2hour 5mins</span>
				<span className='font-bold mx-3 '>17+</span>
				<span>2022</span>
			</div>
			<div className='text-white font-semibold'>
				Note that the development build is not optimized.
				To create a production build, use npm run build.
			</div>
			<div className='text-gray-300'>Action</div>
		</div>
		</>
		)
		}    	
    </div>
  )
}

export default ListItem