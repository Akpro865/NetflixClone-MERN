import thorl from '../assets/thorl.jpg'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined'
import AddIcon from '@mui/icons-material/Add'
import './listItem.scss'

function ListItem() {
  return (
  	<div className='listItem h-32 w-56 cursor-pointer bg-white mr-1 rounded overflow-hidden hover:w-80 hover:h-72 hover:absolute hover:-top-20'>
    	<img src={thorl} alt='all' className='w-full f-full object-cover hover:h-32'/>
		<div>
			<div className='text-white flex p-1 mr-2 border-2 '>
				<PlayArrowIcon />
				<AddIcon />
				<ThumbUpOutlinedIcon />
				<ThumbDownOutlinedIcon />
			</div>
			<div className='text-gray-400'>
				<span>2hour 5mins</span>
				<span>17+</span>
				<span>2022</span>
			</div>
			<div className='text-white'>
				Note that the development build is not optimized.
				To create a production build, use npm run build.
			</div>
			<div className='text-white'>Romance & Action</div>
		</div>    	
    </div>
  )
}

export default ListItem