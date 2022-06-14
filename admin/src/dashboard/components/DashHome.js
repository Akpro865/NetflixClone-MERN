import FeaturedInfo from './FeaturedInfo'
import LatestUser from './LatestUser'
import LatestTransactions from './LatestTransactions'
import Chart from './Chart'
import {data} from './dummydb'
import { useState, useEffect, useMemo } from 'react'
import { url } from '../api/network'
import { useSelector } from 'react-redux'

function DashHome() {
  const [userStats, setUserStats] = useState([])

  const { user } = useSelector((state) => state.auth)

  const months = useMemo(() =>[
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ], [])
  useEffect(() => {
    const getStats = async () => {
    try{      
      const res = await url.get(`users/stats`,{
        headers: {
            Authorization: `Bearer ${user.accessToken}`
        },
    })

    const stat = res.data.sort(function(a,b) {
    return  a._id - b._id
    })
    stat.map(item => setUserStats(prev =>[...prev,{name:months[item._id - 1], "New User":item.total}]))
    } catch(err) {

    }}
    getStats()
  }, [months])


  return (
  	<div className='basis-4/5'>
      <FeaturedInfo />
      <Chart title='User Analytics' data={userStats} dataKey='New User' grid />
      <div className='flex'>
       <LatestUser />
       <LatestTransactions />
      </div>
    </div>
  )
}

export default DashHome