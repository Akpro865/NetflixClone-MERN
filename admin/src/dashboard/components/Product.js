import './product.scss'
import { Link, useLocation } from 'react-router-dom'
import Chart from './Chart'
import { productChartdata } from './dummydb'
import profile from '../assets/ak.jpg'
import PublishIcon from '@mui/icons-material/Publish'

function Product() {
  const location = useLocation()
  const movie = location.movie1
  console.log(movie)
  return (
      <div className='basis-4/5 mx-3'>
        <div className='flex justify-between p-2'>
          <h2 className='text-3xl font-bold'>Edit Movie</h2>
          <Link to='/newproduct'>
            <button className='py-2 px-4 border-none font-semibold rounded bg-teal-500 hover:bg-teal-600 text-white cursor-pointer'>Create</button>
          </Link>
        </div>
        
      	  
      	  <div className='detail1 mx-5 mb-8 p-1 rounded'>
      	    <div className='flex p-3 items-center justify-center'>
      	      <img src={movie.img} alt='Product' className='h-10 w-10 mr-3 object-cover rounded-full' />
      	      <h3 className='ml-5 text-xl font-semibold'>{movie.title}</h3>
      	    </div>
      	    <div className='p-1'>
      	      <div className='flex justify-center p-1'>
      	        <span>Id:</span>
      	        <span className='text-gray-700 ml-10'>{movie._id}</span>
      	      </div>
      	      <div className='flex justify-center p-1'>
      	        <span>Genre:</span>
      	        <span className='text-gray-700 ml-10'>{movie.genre}</span>
      	      </div>
      	      <div className='flex justify-center p-1'>
      	        <span>Year:</span>
      	        <span className='text-gray-700 ml-10'>{movie.year}</span>
      	      </div>
      	      <div className='flex justify-center p-1'>
      	        <span>Limit:</span>
      	        <span className='text-gray-700 ml-10'>{movie.limit}</span>
      	      </div>
              <div className='flex justify-center p-1'>
                <span>Desc:</span>
                <span className='text-gray-700 ml-10'>{movie.desc}</span>
              </div>              
      	    </div>
      	  </div>
      	
      	<div className='detail1 mx-5 rounded relative'>      	  
      	  <div className='flex justify-between p-6'>
      	    <div className='flex flex-col'>
      	      <h5 className='font-medium text-gray-700'>Product Name</h5>
      	      <input type='text' placeholder='Thor Love & Thunder' className='h-10 pl-4 rounded border'/>
      	      <h5 className='font-medium text-gray-700'>Year</h5>
              <input type='text' placeholder='2022' className='h-10 pl-4 rounded border'/>
              <h5 className='font-medium text-gray-700'>Limit</h5>
              <input type='text' placeholder='17+' className='h-10 pl-4 rounded border'/>
              <h5 className='font-medium text-gray-700'>Genre</h5>
              <input type='text' placeholder='comedy' className='h-10 pl-4 rounded border'/>
              <h5 className='font-medium text-gray-700'>Desc</h5>
              <input type='text' placeholder='desc' className='h-10 pl-4 rounded border'/>
              <div className='flex font-medium py-1 flex-col'>
                <label className='p-1 text-gray-700'>Trailer</label>
                <input type='file' id='file' className='m-1'/>
              </div>
              <div className='flex font-medium py-1 flex-col'>
                <label className='p-1 text-gray-700'>Video</label>
                <input type='file' id='file' className='m-1'/>
              </div>
      	    </div>
      	    <div className='flex flex-col justify-center'>
			       	 <div className='flex items-center'>
			       	   <img src={profile} alt='profile' className='mr-3 h-28 w-28 object-cover rounded' />
			       	   <label htmlFor='file'><PublishIcon className='cursor-pointer'/></label>
			       	   <input type='file' id='file' className='hidden'/>
			       	 </div>
			       	 <button className='absolute right-10 bottom-10  bg-blue-600 px-6 py-2 border-none  rounded cursor-pointer  text-white font-semibold hover:bg-blue-700'>update</button>
			     </div>
      	  </div>
      	</div>
      </div>
  )
}

export default Product