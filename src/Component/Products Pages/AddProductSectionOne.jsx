import React, { useState } from 'react'
import {
    Bold, Italic, Underline, Strikethrough, Quote,
    Code, List, Link as LinkIcon, ImageIcon, CloudUpload
} from "lucide-react";


const AddProductSectionOne = () => {
    const [file, setFile] = useState([])

    function handleFile(e) {
        const Evntval =Array.from(e.target.files);
        setFile([...file, ...Evntval]);
         
    }

    function removefile(idx) {
        const newfiles = file.filter((_,i)=> i !==idx);
        setFile(newfiles)
    }

    const Dragingfun = (e)=>{
        e.preventDefault()
    }

    const Drageve = (e)=>{
        e.preventDefault();
        const newfile= e.dataTransfer.files;
        setFile([...file, ...newfile]);
    }

    return (
        <div className='w-full grid grid-cols-1 gap-3'>
            <div className='p-5 rounded grid gap-10  bg-backCol'>
                <div>
                    <h4 className='font-semibold mb-2'>Product Information</h4>
                    <p>To add a new product, please provide the necessary details in the fields below.</p>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <div className='col-start-1 col-end-3'>
                        <label htmlFor="productName" className="text-sm font-semibold text-gray-300">
                            Product Name <span className="text-red-500">*</span>
                        </label>
                        <input id='productName' className='w-full p-1.5 mt-2 border border-gray-500/30' type="text" placeholder='Enter Product Name' />
                    </div>
                    <div className='col-start-1'>
                        <label htmlFor="productSKU" className="text-sm font-semibold text-gray-300">
                            SKU <span className="text-red-500">*</span>
                        </label>
                        <input id='productSKU' className='w-full p-1.5 mt-2 border border-gray-500/30' type="text" placeholder='SOFA-10058' />
                    </div>
                    <div className='col-start-2'>
                        <label htmlFor="productStock" className="text-sm font-semibold text-gray-300">
                            Stock <span className="text-red-500">*</span>
                        </label>
                        <input id='productSKU' className='w-full p-1.5 mt-2 border border-gray-500/30' type="text" placeholder='250' />
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

                        <textarea className='h-70 border border-gray-500/30'>

                        </textarea>

                    </div>
                </div>
            </div>
            <div  onDragEnter={Dragingfun} onDragOver={Dragingfun} onDrop={Drageve} className='p-5 border-solid rounded grid gap-10  bg-backCol'>
                <div>
                    <h4 className='font-semibold mb-2'>Product Image</h4>
                    <p>To upload a product image, please use the option below to select and upload the relevant file.</p>
                </div>
                <label id='Input' className='h-90 flex flex-col gap-4 pb-10 border border-gray-400/40 border-dashed items-center justify-center'>
                    <div className=' flex items-center justify-center rounded-full h-10 w-10 bg-blue-400/40 text-blue-400'>
                        <CloudUpload />
                    </div>
                    <h4 className='text-xl font-medium'>Drop files here or click to upload.</h4>
                    <p>You can drag images here, or browse files via the button below.</p>
                    <input onChange={handleFile} type="file" id='Input' multiple className='hidden' />
                    <label htmlFor='Input' className='px-4 py-0.5 border border-gray-400 hover:border-blueCol hover:text-blueCol transition delay-100'>Browse Images</label>
                </label>
                <div>
                    {file.map((file, idx) => {
                        return (
                            <div key={idx} className=' flex justify-between items-center'>
                                <div className=' flex gap-3 mb-2 items-center'>
                                    <div className='h-8 w-8 object-cover'> <img src={URL.createObjectURL(file)} alt={file.name} /></div>
                                    <p >{file.name}</p>
                                </div>
                         <button onClick={()=>removefile(idx)} className="flex items-center justify-center bg-red-400/50 w-6 h-6 pb-2 rounded-full text-white text-2xl">x</button>                                </div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default AddProductSectionOne