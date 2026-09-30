import React from 'react'
import Nav from './Nav'
import Sectionone from './Sectionone'
import Dountgraph from './Dountgraph'
import WeeklyPerformance from './WeeklyPerformance'
import SalesReport from './SalesReports'
import TopProducts from './SalesProduct'
import RecentOrders from './RecentOrder'
import RevenueByLocations from './Mapcomponent'
import RecentActivity from './RecentActivity'
import Footer from './Footer'

const Homepage = () => {
    return (
        <>
        <div className='px-5 h-lvh pt-20 [&::-webkit-scrollbar]:hidden gap-2 overflow-y-auto'>
            <Nav />
            <div className='grid sm:grid-cols-2 lg:grid-cols-[41%_auto_30%] gap-4'>
            <Sectionone />
            <Dountgraph/>
            <WeeklyPerformance/>
            </div>
            <div className='grid grid-cols-[100%] lg:grid-cols-2 pt-4 gap-4'>
            <SalesReport/>
            <TopProducts/>
            </div>
            <div className='grid grid-cols-[100%] sm:grid-cols-2 lg:grid-cols-[45%_1fr_1fr] pt-4 gap-4'>
                <RecentOrders/> 
                <RevenueByLocations/>
                <RecentActivity/>
            </div>
            <div className='-mx-5'>
            <Footer/>
            </div>
            
        </div>
        </>
    )
}

export default Homepage