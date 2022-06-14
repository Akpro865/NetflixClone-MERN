import './chart.scss'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Chart({title, data, dataKey, grid}) {
  return (
  	<div className='chart1 m-5 p-5 rounded'>
  	 <h3 className='mb-5 text-xl font-semibold'>{title}</h3>
  	 <ResponsiveContainer width='100%' aspect={4/1}>
  	  <LineChart data={data}>
  	  	<XAxis dataKey="name" stroke='#5550bd'/>
  	  	<Line type='monotone' dataKey={dataKey} stroke='#5550bd'/>
  	  	<Tooltip />
  	  	{grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
  	  </LineChart>
  	 </ResponsiveContainer>
    </div>
  )
}

export default Chart