import React from 'react'
import Nav from './Nav'
import Sectionone from './Sectionone'

const Homepage = () => {
    return (
        <div className='px-5 h-lvh pt-20 [&::-webkit-scrollbar]:hidden flex flex-1 flex-col gap-2 overflow-y-auto'>
            <Nav />
            <Sectionone />
        </div>
    )
}

export default Homepage