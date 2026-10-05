import React from 'react'
import {
    Bold, Italic, Underline, Strikethrough, Quote,
    Code, List, Link as LinkIcon, ImageIcon,CloudUpload
} from "lucide-react";


const AddProductSectionOne = () => {
    return (
        <div className='w-full grid grid-cols-1 gap-3'>
            <div className='p-5 border-solid rounded grid gap-10  bg-backCol'>
                <div>
                    <h4 className='font-semibold mb-2'>Product Information</h4>
                    <p>To add a new product, please provide the necessary details in the fields below.</p>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <div className='col-start-1 col-end-3'>
                        <label htmlFor="productName" className="text-sm font-semibold text-gray-300">
                            Product Name <span className="text-red-500">*</span>
                        </label>
                        <input id='productName' className='w-full p-1.5 mt-2 border border-textCol' type="text" placeholder='Enter Product Name' />
                    </div>
                    <div className='col-start-1'>
                        <label htmlFor="productSKU" className="text-sm font-semibold text-gray-300">
                            SKU <span className="text-red-500">*</span>
                        </label>
                        <input id='productSKU' className='w-full p-1.5 mt-2 border border-textCol' type="text" placeholder='SOFA-10058' />
                    </div>
                    <div className='col-start-2'>
                        <label htmlFor="productStock" className="text-sm font-semibold text-gray-300">
                            Stock <span className="text-red-500">*</span>
                        </label>
                        <input id='productSKU' className='w-full p-1.5 mt-2 border border-textCol' type="text" placeholder='250' />
                    </div>
                    <div className='col-start-1 col-end-3 flex flex-col'>
                        <label className="text-sm font-semibold text-gray-300">
                            Product Description <span className="text-gray-500 font-normal">(Optional)</span>
                        </label>

                        <div className="inline-flex items-center gap-1 rounded-md border border-gray-700 p-3">
                            <Bold size={15} />
                            <Italic size={15} />
                            <Underline size={15} />
                            <Strikethrough size={15} />
                            <Quote size={15} />
                            <Code size={15} />
                            <List size={15} />
                            <LinkIcon size={15} />
                            <ImageIcon size={15} />
                        </div>

                        <textarea className='h-70 border border-gray-400'>

                        </textarea>

                    </div>
                </div>
            </div>
            <div className='p-5 border-solid rounded grid gap-10  bg-backCol'>
                    <div>
                        <h4 className='font-semibold mb-2'>Product Image</h4>
                        <p>To upload a product image, please use the option below to select and upload the relevant file.</p>
                    </div>
                    <div>
                        <label htmlFor="file">
                        </label>
                        <input className='h-70 w-full border border-gray-400' type="file"/>
                    </div>

                </div>
        </div>
    )
}

export default AddProductSectionOne