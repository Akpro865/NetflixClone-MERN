import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ListItem from './ListItem'
import { useRef, useState } from 'react'
import './list.scss'

function List({ list, index }) {
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
  		<span className='text-white text-2xl font-semibold ml-12'>{list.title}</span>
    	<div className='relative translate-x-0'>
     		<ArrowBackIosIcon className='icon1 bg-gray-500 z-50 cursor-pointer text-white absolute top-0 bottom-0 m-auto left-0' onClick={()=>handlePosition("left")}/>
     		<div className='flex w-max ml-12 my-4  transition duration-500 ease' ref={listRef}>
     			{list.content.map((item, i) => (
              <ListItem index={i} item={item} key={i}/>
            ) 
          )}                
     			
     		</div>
     		<ArrowForwardIosIcon className='icon1 z-50 cursor-pointer text-white absolute top-0 bottom-0 m-auto right-0' onClick={()=>handlePosition("right")}/>
    	</div>
    </div>
  )
}

export default List