import './product.scss'
import { Link } from 'react-router-dom'
import Chart from './Chart'
import { productChartdata } from './dummydb'
import profile from '../../../assets/ak.jpg'
import PublishIcon from '@mui/icons-material/Publish'

function Product() {
  return (
      <div className='basis-4/5 m-2'>
        <div className='flex justify-between p-3'>
          <h2 className='text-3xl font-bold'>Edit Product</h2>
          <Link to='/newproduct'>
            <button className='py-1 px-2 font-semibold rounded bg-teal-500 hover:bg-teal-600 text-white'>Create</button>
          </Link>
        </div>
        <div className='flex '>
      	  <div className='basis-2/3 '>
      	    <Chart title='Sales Analytics' data={productChartdata} dataKey='sales' className='sales1'/>
      	  </div>
      	  <div className='detail1 basis-1/3 m-5 p-3 rounded'>
      	    <div className='flex p-3 items-center'>
      	      <img src={profile} alt='Product' className='h-10 w-10 mr-3 object-cover rounded-full' />
      	      <h3 className='ml-5 text-xl font-semibold'>Realme 9 pro</h3>
      	    </div>
      	    <div className='p-3'>
      	      <div className='flex justify-around p-1'>
      	        <span>Id:</span>
      	        <span className='text-gray-700'>#5560</span>
      	      </div>
      	      <div className='flex justify-around p-1'>
      	        <span>Sales:</span>
      	        <span className='text-gray-700'>375</span>
      	      </div>
      	      <div className='flex justify-around p-1'>
      	        <span>Active:</span>
      	        <span className='text-gray-700'>yes</span>
      	      </div>
      	      <div className='flex justify-around p-1'>
      	        <span>In stock:</span>
      	        <span className='text-gray-700'>no</span>
      	      </div>
      	    </div>
      	  </div>
      	</div>
      	<div className='detail1 mx-5 rounded'>      	  
      	  <div className='flex justify-between p-6'>
      	    <div className='flex flex-col'>
      	      <h3 className='p-1 text-xl font-semibold text-gray-700'>Product Name</h3>
      	      <input type='text' placeholder='Realme 9 pro' className='h-10 rounded border-b-2'/>
      	      <label for='stock' className='p-1 text-gray-700'>In stock</label>
	          <select name='stock' id='stock' className='h-9'>
	           <option value='yes' className='p-2'>yes</option>
	           <option value='no' className='p-2'>no</option>
	          </select>
	          <label for='active' className='p-1 text-gray-700'>Active</label>
	          <select name='active' id='active' className='h-9'>
	           <option value='yes' className='p-2'>yes</option>
	           <option value='no' className='p-2'>no</option>
	          </select>
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
  )
}

export default Product