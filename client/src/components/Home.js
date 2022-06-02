import Header from './Header'
import Featured from './Featured'
import List from './List'
import './Home.scss'

function Home() {
  return (
    <div className='home overflow-hidden'>
    	<Header />
    	<Featured type='movie'/>
    	<List />
    	<List />
    	<List />
    	<List />
    </div>
  )
}

export default Home
