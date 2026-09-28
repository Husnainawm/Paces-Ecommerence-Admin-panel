import React from 'react'
import Nav from './Nav'
import Sectionone from './Sectionone'
import Dountgraph from './Dountgraph'
import WeeklyPerformance from './WeeklyPerformance'

const Homepage = () => {
    return (
        <div className='px-5 h-lvh pt-20 [&::-webkit-scrollbar]:hidden flex flex-1 flex-col gap-2 overflow-y-auto'>
            <Nav />
            <div className='flex wrap gap-5'>
            <Sectionone />
            <Dountgraph/>
            <WeeklyPerformance/>
            </div>
        </div>
    )
}

export default Homepage