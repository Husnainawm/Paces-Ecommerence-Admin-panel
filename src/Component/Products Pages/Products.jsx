import React from 'react'
import Nav from '../Heros/Nav.jsx'
import DisplayCards from './DisplayCards.jsx'
import ProductTable from './ProductTable.jsx'
import Footer from '../Heros/Footer.jsx'

const Products = () => {
  return (
    <>
    <div className='pt-20 px-5 flex flex-col h-lvh gap-2 [&::-webkit-scrollbar]:hidden overflow-y-auto'>
        <Nav Page="Products"/>
        <DisplayCards/>
        <ProductTable/>
        <div className='-mx-5'>
        <Footer/>
        </div>
    </div>
    </>
  )
}

export default Products