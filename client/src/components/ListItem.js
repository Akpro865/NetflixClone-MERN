import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined'
import AddIcon from '@mui/icons-material/Add'
import './listItem.scss'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchMovie, getMovie } from '../features/movieSlice'
import { useDispatch, useSelector } from 'react-redux'

function ListItem({item, index}) {
	const [isHovered, setIsHovered] = useState(false)
	
	const dispatch = useDispatch()
    const movie = useSelector(getMovie)

	useEffect(() => {
		dispatch(fetchMovie(item))
	}, [item])

  return (
  	<Link to={{ pathname: '/watch', movie: movie }}>
  	<div onMouseEnter={()=>setIsHovered(true)}
  	 onMouseLeave={()=>setIsHovered(false)}
  	 style={{left: isHovered && index * 224 - 48 + (index * 2)}}
  	 className='listItem h-32 w-56 cursor-pointer bg-white mr-1 rounded overflow-hidden hover:w-80 hover:h-76 hover:absolute hover:-top-32'>
    	<img src={movie.img} alt='all' className='w-full f-full object-cover'/>
    	
    	{isHovered && (
    	<> 
    	<video src={movie.trailer} autoPlay={true} loop className='vid w-full object-cover absolute top-0 left-0'/>    	
		<div className='flex flex-col p-2'>
			<div className='text-white flex mr-2 text-2xl font-bold'>
				<PlayArrowIcon className='border rounded-full mr-2 p-1 hover:bg-gray-400 hover:text-black'/>
				<AddIcon className='border rounded-full mr-2 p-1 hover:bg-gray-400 hover:text-black'/>
				<ThumbUpOutlinedIcon className='border rounded-full mr-2 p-1 hover:bg-gray-400 hover:text-black'/>
				<ThumbDownOutlinedIcon className='border rounded-full mr-2 p-1 hover:bg-gray-400 hover:text-black'/>
			</div>
			<div className='text-gray-400 flex my-px'>
				<span>{movie.duration}</span>
				<span className='font-bold mx-3 '>{movie.limit}</span>
				<span>{movie.year}</span>
			</div>
			<div className='text-white font-semibold'>{movie.desc}</div>
			<div className='text-gray-300'>{movie.genre}</div>
		</div>
		</>
		)}    	
    </div>
    </Link>
  )
}

export default ListItem