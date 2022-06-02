import './transaction.scss'
import { data1 } from './dummydb'

function LatestTransactions() {
	const Button = ({type}) => {
		return <button className={"dynbutton " + type}>{type}</button>
	}
  return (
  	<div className='transaction1 m-5 basis-2/3 bg-orange-50 hover:bg-yellow-50 cursor-pointer p-5 rounded-xl overflow-clip'>
  	<h3 className='text-2xl font-semibold text-gray-600'>Latest Transactions</h3>
  	<div className='w-full h-full overflow-hidden'>
  	<table className='w-full h-full ml-3'>
  	 <thead>
  	  <tr >
	    <th className='text-left'>Customer</th>
	    <th className='text-left'>Date</th>
	    <th className='text-left'>Amount</th>
	    <th className='text-left'>Status</th>
	   </tr>
	  </thead>
	   <tbody>
  	{data1.map((data) => (	   
	  <tr>
	   
	    <td >
	    <div className='flex content-center'>
	     <img src={data.img} alt='Customer' className='h-10 w-10 object-cover rounded-full'/>
	     <span className='ml-4 flex items-center'>{data.name}</span>
	     </div>
	    </td>
	   
	    <td className='text-gray-600'>{data.date}</td>
	    <td className='text-gray-600'>{data.amount}</td>
	    <td><Button type={data.status}/></td>
	  </tr>
	 
  	))}
  	  </tbody>
  	 </table>
  	</div>
    </div>
  )
}

export default LatestTransactions