import React from 'react'
import AddProductSectionOne from './AddProductSectionOne'
import AddProductSectionTwo from './AddProductSectionTwo'

const AddItem1 = () => {
  return (
    <>
    <div className='grid gap-3 mt-5 lg:grid-cols-[63%_auto]'>
      <AddProductSectionOne/>
      <AddProductSectionTwo/>
    </div>
    <div className='flex justify-center gap-2 w-full mt-5 text-white'>
      <button className='px-5 py-2 bg-redCol rounded'>Discard</button>
      <button className='px-5 py-2 bg-purple-500 rounded'>Save as Draft</button>
      <button className='px-5 py-2 bg-greenCol rounded'>Publish</button>
    </div>
    </>
  )
}

export default AddItem1