import Header from './Header'
import Featured from './Featured'
import List from './List'
import './Home.scss'
import { useState, useEffect } from 'react'
import { url } from '../api/network'
import { fetchRandomList, getRandomList } from '../features/movieSlice'
import { useDispatch, useSelector } from 'react-redux'

function Home({ type }) {
    const [genre, setGenre] = useState(null)

    const dispatch = useDispatch()
    const lists = useSelector(getRandomList)

    useEffect(() => {
        dispatch(fetchRandomList({type, genre}))
    }, [type, genre])

  return (
    <div className='home overflow-hidden'>
    	<Header />
    	<Featured type={type}/>
        {lists.map((list, i) => (
            <List list={list} index={i} key={i}/>
        ))}
    	
    </div>
  )
}

export default Home
