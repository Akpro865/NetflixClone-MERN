import FeaturedInfo from './FeaturedInfo'
import Chart from './Chart'
import {data} from './dummydb'

function DashHome() {
  return (
  	<div className='basis-4/5'>
      <FeaturedInfo />
      <Chart title='User Analytics' data={data} dataKey='Active User' grid />
    </div>
  )
}

export default DashHome