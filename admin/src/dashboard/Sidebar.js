import LineStyleIcon  from '@mui/icons-material/LineStyle'
import TimelineIcon  from '@mui/icons-material/Timeline'
import TrendingUpIcon  from '@mui/icons-material/TrendingUp'
import PermIdentityIcon  from '@mui/icons-material/PermIdentity'
import StorefrontIcon  from '@mui/icons-material/Storefront'
import BarChartIcon  from '@mui/icons-material/BarChart'
import WorkOutlineIcon  from '@mui/icons-material/WorkOutline'
import AttachMoneyIcon  from '@mui/icons-material/AttachMoney'
import MailOutlineIcon  from '@mui/icons-material/MailOutline'
import DynamicFeedIcon  from '@mui/icons-material/DynamicFeed'
import ChatBubbleIcon  from '@mui/icons-material/ChatBubble'
import ReportIcon  from '@mui/icons-material/Report'
import './sidebar.scss'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
  	<div className='side1 sticky top-14 left basis-1/5 bg-green-50'>
    	<div className='flex flex-col content-center'>
    		<h3 className='ml-4 text-gray-800 font-medium'>Dashboard</h3>
            <Link to='/'>
    		  <div className='ml-8 p-1 flex cursor-pointer flex items-center rounded-2xl hover:bg-green-300'>
    		  <LineStyleIcon className='ml-3'/>
    		  <span className='ml-2'>Home</span>
    		</div>
            </Link>
    		<div className='ml-8 p-1 cursor-pointer flex items-center rounded-2xl hover:bg-green-300'>
    		<TimelineIcon className='ml-3'/>
    		<span className='ml-2'>Analytics</span>
    		</div>
    		<div className='ml-8 p-1 cursor-pointer flex items-center rounded-2xl hover:bg-green-300'>
    		<TrendingUpIcon className='ml-3'/>
    		<span className='ml-2'>Sales</span>
    		</div>
    	</div>
    	<div className='flex flex-col content-center'>
    		<h3 className='ml-4 text-gray-800 font-medium'>Quick Menu</h3>
            <Link to='/users'>
    		  <div className='ml-8 p-1 flex cursor-pointer flex items-center rounded-2xl hover:bg-green-300'>
    		  <PermIdentityIcon className='ml-3'/>
    		  <span className='ml-2'>Users</span>
    		  </div>
            </Link>
            <Link to='/products'>
    		  <div className='ml-8 p-1 cursor-pointer flex items-center rounded-2xl hover:bg-green-300'>
    		  <StorefrontIcon className='ml-3'/>
    		  <span className='ml-2'>Products</span>
    		  </div>
            </Link>
    		<div className='ml-8 p-1 cursor-pointer flex items-center rounded-2xl hover:bg-green-300'>
    		<AttachMoneyIcon className='ml-3'/>
    		<span className='ml-2'>Transactions</span>    		
    		</div>
    	</div>
    	<div className='flex flex-col content-center'>
    		<h3 className='ml-4 text-gray-800 font-medium'>Notifications</h3>
    		<div className='ml-8 p-1 flex cursor-pointer flex items-center rounded-2xl hover:bg-green-300'>
    		<MailOutlineIcon className='ml-3'/>
    		<span className='ml-2'>Mail</span>
    		</div>
    		<div className='ml-8 p-1 cursor-pointer flex items-center rounded-2xl hover:bg-green-300'>
    		<DynamicFeedIcon className='ml-3'/>
    		<span className='ml-2'>Message</span>
    		</div>
    		<div className='ml-8 p-1 cursor-pointer flex items-center rounded-2xl hover:bg-green-300'>
    		<ChatBubbleIcon className='ml-3'/>
    		<span className='ml-2'>Feedback</span>
    		</div>
    	</div>
    	<div className='flex flex-col content-center'>
    		<h3 className=' ml-4 text-gray-800 font-medium'>Staff</h3>
    		<div className='ml-8 p-1 flex cursor-pointer flex items-center rounded-2xl hover:bg-green-300'>
    		<WorkOutlineIcon className='ml-3'/>
    		<span className='ml-2'>Manage</span>
    		</div>
    		<div className='ml-8 p-1 cursor-pointer flex items-center rounded-2xl hover:bg-green-300'>
    		<ReportIcon className='ml-3'/>
    		<span className='ml-2'>Reports</span>
    		</div>
    	</div>
    </div>
  )
}

export default Sidebar