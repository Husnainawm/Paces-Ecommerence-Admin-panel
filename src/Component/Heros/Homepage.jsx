import React from 'react'
import Nav from './Nav'
import Sectionone from './Sectionone'
import Dountgraph from './Dountgraph'
import WeeklyPerformance from './WeeklyPerformance'
import SalesReport from './SalesReports'
import TopProducts from './SalesProduct'
import RecentOrders from './RecentOrder'

const Homepage = () => {
    return (
        <div className='px-5 h-lvh pt-20 [&::-webkit-scrollbar]:hidden flex flex-1 flex-col gap-2 overflow-y-auto'>
            <Nav />
            <div className='flex wrap gap-5'>
            <Sectionone />
            <Dountgraph/>
            <WeeklyPerformance/>
            </div>
            <div className='flex flex-wrap w-full pt-4 gap-5'>
            <SalesReport/>
            <TopProducts/>
            </div>
            <div className='flex flex-wrap pt-4'>
                <RecentOrders/>
                
            </div>
        </div>
    )
}

export default Homepage