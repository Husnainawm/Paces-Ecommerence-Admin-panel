import React from 'react'
import Nav from './Nav'

const Homepage = () => {
  return (
    <div className='px-5 h-lvh pt-20 [&::-webkit-scrollbar]:hidden flex flex-1 gap-2 overflow-y-auto'>
        <Nav/>
    </div>
  )
}

export default Homepage