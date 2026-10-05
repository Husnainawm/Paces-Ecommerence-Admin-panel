import React from 'react'
import Nav from '../Heros/Nav.jsx'
import Footer from '../Heros/Footer.jsx'
import AddItem1 from './AddItem.jsx'

const AddProduct = () => {
  return (
    <div className='pt-20 px-5 h-lvh gap-2 [&::-webkit-scrollbar]:hidden overflow-y-auto'>
        <Nav Page="Add Products"/>
        <AddItem1/> 
        <div className='-mx-5'>
        <Footer/>
        </div>
    </div>
  )
}

export default AddProduct