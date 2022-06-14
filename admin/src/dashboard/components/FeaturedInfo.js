import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import './FeaturedInfo.scss'

function FeaturedInfo() {
  return (
  	<div>
    <div className=' p-5'>
     <div className='flex justify-between'>
      <div className='cursor-pointer hover:bg-sky-100 card1 bg-sky-50 basis-1/3 p-4 m-4 rounded-xl '>
       <h3 className='text-xl flex justify-center text-gray-700'>Revenue</h3>
       <div  className='flex justify-evenly p-3'>
       <span className='text-2xl font-semibold'>$ 2347</span>
       <span className='flex items-center'>+1.7 <ArrowUpwardIcon className='text-green-600'/> </span>
       </div>
       <p className='flex justify-center text-gray-600'>compared to last month</p>
      </div>
      <div className='cursor-pointer card1 bg-sky-50 hover:bg-sky-100 p-4 basis-1/3 m-4 rounded-xl'>
      	<h3 className='text-xl flex justify-center text-gray-700'>Sales</h3>
      	<div  className='flex justify-evenly p-3'>
      	<span className='text-2xl font-semibold'>$ 1234</span>
        <span className='flex items-center'>+2.3 <ArrowUpwardIcon className='text-green-600'/> </span>
        </div>
        <p className='flex justify-center text-gray-600'>compared to last month</p>
      </div>
      <div className='card1 cursor-pointer bg-sky-50 hover:bg-sky-100 p-4 basis-1/3 m-4 rounded-xl '>
      	<h3 className='text-xl flex justify-center text-gray-700'>Growth</h3>
      	<div className='flex justify-evenly content-center p-3'>
      	<span className='text-2xl font-semibold'>$ 976</span>
        <span className='flex items-center'>-1.1 <ArrowDownwardIcon className='text-red-600'/> </span>
        </div>
        <p className='flex justify-center text-gray-600'>compared to last month</p>

      </div>
     </div>
    </div>
    </div>
  )
}

export default FeaturedInfo