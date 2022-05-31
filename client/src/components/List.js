import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ListItem from './ListItem'
import { useRef, useState } from 'react'

function List() {
	const [slideNum, setSlideNum] = useState(0)
	const listRef = useRef()

	const handlePosition = (direction) => {
		let distance = listRef.current.getBoundingClientRect().x - 48
		if (direction === 'left' && slideNum > 0) {
			setSlideNum(slideNum - 1)
			listRef.current.style.transform = `translateX(${228 + distance}px)`			
		}
		if (direction === 'right' && slideNum < 5) {
			setSlideNum(slideNum + 1)
			listRef.current.style.transform = `translateX(${-228 + distance}px)`
		}
	}
  return (
  	<div className='w-full mt-2.5'>
  		<span className='text-white text-2xl font-semibold ml-12'>Continue to watch</span>
    	<div className='relative translate-x-0'>
     		<ArrowBackIosIcon className='bg-gray-500 h-full w-12 z-50 cursor-pointer text-white absolute top-0 bottom-0 m-auto left-0' onClick={()=>handlePosition("left")}/>
     		<div className='flex w-max ml-12 my-4  transition duration-500 ease' ref={listRef}>
     			<ListItem index={0}/>
     			<ListItem index={1}/>
     			<ListItem index={2}/>
     			<ListItem index={3}/>
     			<ListItem index={4}/>
     			<ListItem index={5}/>
     			<ListItem index={6}/>
     			<ListItem index={7}/>
     			<ListItem index={8}/>
     			<ListItem index={9}/>
     		</div>
     		<ArrowForwardIosIcon className='bg-gray-500 h-full w-12 z-50 cursor-pointer text-white absolute top-0 bottom-0 m-auto right-0' onClick={()=>handlePosition("right")}/>
    	</div>
    </div>
  )
}

export default List