function NewProduct() {
	return (
	 <div className='basis-4/5 m-4 p-4'>
	  <div className=''>
	   <h2 className='text-3xl font-semibold'>New Product</h2>
	   <form className='flex flex-col p-3'>
	     <div className='w-1/2 p-1 flex flex-col m-2'>
	       <label className='p-1 text-gray-700'>Name</label>
	       <input type='text' placeholder='Realme 9 pro' className='h-12 pl-3 rounded border-2' />
	     </div>
	     <div className='w-1/2 flex flex-col p-1 m-2'>
	       <label className='p-1 text-gray-700'>Stock</label>
	       <input type='text' placeholder='454' className='pl-3 h-12 rounded border-2' />
	     </div>	     
	    
	     <div className='w-1/2 flex flex-col p-1 m-2 rounded'>
	       <label for='status' className='p-1 text-gray-700'>Active</label>
	       <select name='status' id='status' className='h-12 rounded'>
	         <option value='yes' className='p-2'>yes</option>
	         <option value='no' className='p-2'>no</option>
	       </select>
	     </div>
	     <div className='flex flex-col p-1 m-2'>
	       <label className='p-1 text-gray-700'>Image</label>
	       <input type='file' id='file' className='m-1'/>
	     </div>
	   </form>
	  </div>
	  <div>
	    <button className='bg-blue-600 flex justify-center rounded w-max-sm cursor-pointer py-2 px-8 text-white font-semibold hover:bg-blue-700'>create</button>
	  </div>	   
	 </div>
	)
}

export default NewProduct