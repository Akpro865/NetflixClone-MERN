function NewUser() {
	return (
	 <div className='basis-4/5 m-4 p-4'>
	   <h2 className='text-3xl font-semibold'>New User</h2>
	   <form className='flex flex-wrap p-3'>
	     <div className='w-5/12 p-1 flex flex-col m-2'>
	       <label className='p-1 text-gray-700'>Username</label>
	       <input type='text' placeholder='Ajithkumar' className='h-12 pl-3 rounded border-2' />
	     </div>
	     <div className='w-5/12 flex flex-col p-1 m-2'>
	       <label className='p-1 text-gray-700'>Fullname</label>
	       <input type='text' placeholder='jhon Smith' className='h-12 pl-3 rounded border-2' />
	     </div>
	     <div className='w-5/12 flex flex-col p-1 m-2'>
	       <label className='p-1 text-gray-700'>Email</label>
	       <input type='email' placeholder='pro@gmail.com' className='h-12 pl-3 rounded border-2' />
	     </div>
	     <div className='w-5/12 flex flex-col p-1 m-2'>
	       <label className='p-1 text-gray-700'>Password</label>
	       <input type='text' placeholder='password' className='h-12 pl-3 rounded border-2' />
	     </div>
	     <div className='w-5/12 flex flex-col p-1 m-2'>
	       <label className='p-1 text-gray-700'>Phone</label>
	       <input type='text' placeholder='+91 9876343220' className='pl-3 h-12 rounded border-2' />
	     </div>
	     <div className='w-5/12 flex flex-col p-1 m-2'>
	       <label className='p-1 text-gray-700'>Address</label>
	       <input type='text' placeholder='TamilNadu | India' className='pl-3 h-12 rounded border-2' />
	     </div>
	     <div className='w-5/12 flex flex-col  p-1 m-2'>
	       <label className='p-1 text-gray-700'>gender</label>
	       <div className='h-12'>
	         <input type='radio' name='gender' id='male' value='male'/>
	         <label for='male' className='p-1'>male</label>
	         <input type='radio' name='gender' id='female' value='female'/>
	         <label for='female' className='p-1'>female</label>
	         <input type='radio' name='gender' id='other' value='other'/>
	         <label for='other' className='p-1'>other</label>
	       </div>
	     </div>
	     <div className='w-5/12 flex flex-col p-1 m-2'>
	       <label for='status' className='p-1 text-gray-700'>Active</label>
	       <select name='status' id='status' className='h-10 rounded'>
	         <option value='yes' className=''>yes</option>
	         <option value='no' className=''>no</option>
	       </select>
	     </div>
	   </form>
	   <button className='bg-blue-600 rounded cursor-pointer py-2 px-10 text-white font-semibold hover:bg-blue-700'>update</button>
	 </div>
	)
}

export default NewUser