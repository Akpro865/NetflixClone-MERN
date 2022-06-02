import thorl from '../assets/thorl.jpg'
import Titleimg from '../assets/avengers.png'
import './Featured.scss'
import PlayArrowOutlinedIcon from'@mui/icons-material/PlayArrowOutlined'
import InfoOutlinedIcon from'@mui/icons-material/InfoOutlined'

function Featured({type}) {
  return (
  	<div className='featured relative mb-3'>

  		{type && (
  			<div className='absolute top-20 left-12 font-medium text-xl text-white flex items-center'>
  				<span className='text-3xl font-semibold'>{type === 'movie' ? 'Movies' : 'Series'}</span>
  				<select name='genre' id='genre' className='cursor-pointer bg-[#0b0b0b] border border-white text-white ml-5 p-2'>
  					<option>Genre</option>
  					<option value='adventure'>Adventure</option>
  					<option value='comedy'>Comedy</option>
  					<option value='crime'>Crime</option>
  					<option value='fantasy'>Fantasy</option>
  					<option value='historical'>Historical</option>
  					<option value='horror'>Horror</option>
  					<option value='romance'>Romance</option>
  					<option value='sci-fi'>Sci-fi</option>
  					<option value='thriller'>Thriller</option>
  					<option value='western'>Western</option>
  					<option value='animation'>Animation</option>
  					<option value='drama'>Drama</option>
  					<option value='documentary'>Documentary</option>

  				</select>
  			</div>
  		)}

	    <img src={thorl} alt='Featured' className='w-full h-full object-cover'/>
	    <div className='w-4/12 absolute left-8 bottom-10 flex flex-col'>
	     	<img src={Titleimg} alt='Titleimg' className='w-3/4 mb-1'/>
	     	<span className='text-white font-medium mx-4'>img elements must have an alt prop, either with meaningful text, or an empty string for decorative images
	     	img elements must have an alt prop, either with meaningful text, or an empty string for decorative images
	     	</span>
	     	<div className='text-lg mt-4 flex'>
	     		<button className='border-none bg-white p-3 rounded ml-4 hover:bg-blue-600 hover:text-white'>
	     			<PlayArrowOutlinedIcon />
	     			<span className='ml-2'>Play</span>
	     		</button>
	     		<button className='border-none p-3 rounded bg-gray-300 ml-6 hover:bg-blue-600 hover:text-white'>
	     			<InfoOutlinedIcon />
	     			<span className='ml-2'>Info</span>
	     		</button>
	     	</div>
	    </div>
	</div>
  )
}

export default Featured
