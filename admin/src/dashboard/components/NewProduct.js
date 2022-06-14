import { useState } from 'react'

function NewProduct() {
	const [movie, setMovie] = useState(null)
	const [img, setImg] = useState(null)
	const [imgTitle, setImgTitle] = useState(null)
	const [imgSm, setImgSm] = useState(null)
	const [trailer, setTrailer] = useState(null)
	const [video, setVideo] = useState(null)

	const onChange = (e) => {
		setMovie({
		...movie,
		[e.target.name]: e.target.value
		})
	}
	
	return (
	 <div className='basis-4/5 m-4 p-4'>
	  <div className=''>
	   <h2 className='text-3xl font-semibold'>New Movie</h2>
	   <form className='flex p-3 flex-wrap'>
	   	 <div className='flex flex-col p-1 m-2'>
	       <label className='p-1 text-gray-700'>Image</label>
	       <input type='file' id='img' name='img' className='m-1' onChange={e => setImg(e.target.files[0])}/>
	     </div>
	     <div className='flex flex-col p-1 m-2'>
	       <label className='p-1 text-gray-700'>Title Image</label>
	       <input type='file' id='imgTitle' className='m-1' name='imgTitle' onChange={e => setImgTitle(e.target.files[0])}/>
	     </div>
	     <div className='flex flex-col p-1 m-2'>
	       <label className='p-1 text-gray-700'>Thumbnail Image</label>
	       <input type='file' id='imgSm' className='m-1' name='imgTitle' onChange={e => setImgTitle(e.target.files[0])}/>
	     </div>
	     <div className='p-1 flex flex-col m-2'>
	       <label className='p-1 text-gray-700'>Title</label>
	       <input type='text' placeholder='Thor Love & Thunder' className='h-12 pl-3 rounded' onChange={onChange}/>
	     </div>
	     <div className='flex flex-col p-1 m-2'>
	       <label className='p-1 text-gray-700'>Desc</label>
	       <input type='text' name='desc' placeholder='something...' className='pl-3 h-12 rounded border' onChange={onChange}/>
	     </div>
	     <div className='flex flex-col p-1 m-2'>
	       <label className='p-1 text-gray-700'>Genre</label>
	       <input type='text' name='genre' placeholder='comedy' className='pl-3 h-12 rounded border' onChange={onChange}/>
	     </div>
	     <div className='flex flex-col p-1 m-2'>
	       <label className='p-1 text-gray-700'>Year</label>
	       <input type='text' name='year' placeholder='2022' className='pl-3 h-12 rounded border' onChange={onChange}/>
	     </div>
	     <div className='flex flex-col p-1 m-2'>
	       <label className='p-1 text-gray-700'>Duration</label>
	       <input type='text' name='duration' placeholder='1h 2m' className='pl-3 h-12 rounded border' onChange={onChange}/>
	     </div>
	     <div className='flex flex-col p-1 m-2'>
	       <label className='p-1 text-gray-700'>Limit</label>
	       <input type='text' name='limit' placeholder='limit' className='pl-3 h-12 rounded border' onChange={onChange}/>
	     </div> 
	    
	     <div className='flex flex-col p-1 m-2 rounded w-1/4'>
	       <label for='status' className='p-1 text-gray-700'>Is Series</label>
	       <select name='isSeries' id='isSeries' className='h-10 rounded'>
	         <option value='yes' className='p-2'>yes</option>
	         <option value='no' className='p-2'>no</option>
	       </select>
	     </div>
	     <div className='flex flex-col p-1 m-2'>
	       <label className='p-1 text-gray-700'>Trailer</label>
	       <input type='file' id='trailer' className='m-1' name='trailer' onChange={e => setTrailer(e.target.files[0])}/>
	     </div>
	     <div className='flex flex-col p-1 m-2'>
	       <label className='p-1 text-gray-700'>Video</label>
	       <input type='file' id='video' className='m-1' name='video' onChange={e => setVideo(e.target.files[0])}/>
	     </div>
	   </form>
	  </div>
	  <div>
	    <button className='bg-blue-600 border-none flex justify-center rounded w-max-sm cursor-pointer py-2 px-8 text-white font-semibold hover:bg-blue-700'>create</button>
	  </div>	   
	 </div>
	)
}

export default NewProduct