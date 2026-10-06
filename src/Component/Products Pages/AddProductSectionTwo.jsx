import React from 'react'

const AddProductSectionTwo = () => {
  return (
    <div className='w-full grid grid-cols-1 gap-4'>
            <div className='p-5 h-auto w-full rounded grid grid-cols-1  bg-backCol'>
                <div>
                    <h4 className='font-semibold mb-2'>Pricing</h4>
                    <p>Set the base price and applicable discount for the product using the options below.</p>
                </div>
                <div className='flex flex-col gap-5'>
                    <div>
                        <label htmlFor="base">Base Price</label><br />
                        <input className='border border-gray-400/40 w-full mt-2 p-1.5' type="text" id='base' placeholder='$  Enter base price(eg..199.99)' />
                    </div>
                    <div>
                        <label htmlFor="base">Discount Type
                            <span className='text-gray-400'>
                              (Optional)
                            </span>
                        </label>
                        <br />
                        <select className='border border-gray-400/40 w-full mt-2 p-1.5' id="base">
                            <option>No Discount</option>
                            <option>Choice Discount</option>
                            <option>Flat Discount</option>
                            <option>Percentage Discount</option>
                        </select>
                        
                    </div>
                    <div>
                         <label htmlFor="base">Discount Type
                            <span className='text-gray-400'>
                              (Optional)
                            </span>
                        </label>
                        <br />
                        <input className='border border-gray-400/40 w-full mt-2 p-1.5' type="text" placeholder='Enter discount amount or percentage' />
                    </div>

                </div>
            </div>
            <div className='p-5 h-170 lg:h-160 w-full rounded grid grid-cols-1 gap-5  bg-backCol'>
                <div>
                    <h4 className='font-semibold mb-2'>Organize</h4>
                    <p>Organize your product by selecting the appropriate brand, category, sub-category, status, and tags.</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <div>
                        <label htmlFor="base">Base Price</label><br />
                        <input className='border border-gray-400/40 w-full mt-2 p-1.5' type="text" id='base' placeholder='$  Enter base price(eg..199.99)' />
                    </div>
                    <div>
                        <label htmlFor="base">Brand
                        </label>
                        <br />
                        <input className='border border-gray-400/40 w-full mt-2 p-1.5' type="text" placeholder='Enter brand name' />
                        
                    </div>
                     <div>
                        <label htmlFor="base">Category
                        </label>
                        <br />
                        <select className='border border-gray-400/40 w-full mt-2 p-1.5' id="base">
                            <option>Choice Category</option>
                            <option>Furniture</option>
                            <option>Electronics</option>
                            <option>Fashion</option>
                        </select>
                        
                    </div>
                     <div>
                        <label htmlFor="base">Sub Category
                        </label>
                        <br />
                        <select className='border border-gray-400/40 w-full mt-2 p-1.5' id="base">
                            <option>Choice Sub Category</option>
                            <option>Chairs</option>
                            <option>Sofas</option>
                            <option>Tables</option>
                        </select>
                        
                    </div>
                    <div>
                        <label htmlFor="base">Status
                        </label>
                        <br />
                        <select className='border border-gray-400/40 w-full mt-2 p-1.5' id="base">
                            <option>Choice Status</option>
                            <option>Published</option>
                            <option>Inactive</option>
                            <option>Schedule</option>
                            <option>Draft</option>
                        </select>
                        
                    </div>
                    <div>
                         <label htmlFor="base">Tags
                        </label>
                        <br />
                        <input className='border border-gray-400/40 w-full mt-2 p-1.5' type="text" placeholder='Enter Tags Seprated By commas' />
                    </div>

                </div>
            </div>

    </div>
  )
}

export default AddProductSectionTwo