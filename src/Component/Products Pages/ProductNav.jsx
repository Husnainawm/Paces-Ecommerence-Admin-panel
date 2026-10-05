import { Activity, Search, Tag, DollarSign,LayoutGrid, ListChecks, Plus } from 'lucide-react'
import { useState } from "react";



const ProductNav = ({ onAdd }) => {
    const [view, setView] = useState("list");
     const viewBtn = (name) =>
    `size-10 grid place-items-center rounded-lg transition-colors ${
      view === name
        ? "bg-blue-600 text-white"
        : "bg-blue-500/15 text-blue-400 hover:bg-blue-500/25"
    }`;

    const butt = [
        {
            icon: Tag,
            Title: ["Category", "Electronics", "Fashion", "Home", "Sports", "Beauty"]
        },
        {
            icon: Activity,
            Title: ["Status", "Published", "Pending", "Out of Stocks"]
        },
        {
            icon: DollarSign,
            Title: ["Price Range", "$0-$50", "$51-$150", "$151-$500", "$500+"]
        },
        {
            icon: "none",
            Title: ["5", "8", "10", "15", "20"]
        }
    ]
    return (
        <div className='px-5 py-2 flex justify-between'>
            <div className='flex items-center w-55 gap-2 px-2 py-1 rounded border'>
                <Search size={16} />
                <input type="sreach" placeholder='Search product name...' className='outline-none' />
            </div>
            <div className=' flex gap-3 items-center'>
                <p>Fliter By:</p>
                {butt.map((elem, idx) => {
                    return (
                        <div key={idx} className='w-30 flex items-center'>
                            <elem.icon size={16} />
                            <select className='w-full flex items-center' name={elem.Title} id="">{
                                elem.Title.map((ops, index) => {
                                    return <option key={index} className='bg-backCol'>{ops}</option>
                                })
                            }
                            </select>
                        </div>
                    )
                })}
            </div>
            <div className="flex items-center gap-2">
                <button
                    onClick={() => setView("grid")}
                    className={viewBtn("grid")}
                    aria-label="Grid view"
                    aria-pressed={view === "grid"}
                >
                    <LayoutGrid size={18} />
                </button>

                <button
                    onClick={() => setView("list")}
                    className={viewBtn("list")}
                    aria-label="List view"
                    aria-pressed={view === "list"}
                >
                    <ListChecks size={18} />
                </button>

                <button
                    onClick={onAdd}
                    className="flex items-center gap-2 bg-[#ff5c85] hover:bg-[#ff4673] text-white text-sm font-medium px-5 h-10 rounded-lg transition-colors"
                >
                    <Plus size={16} />
                    Add Product
                </button>
            </div>
        </div>
    )
}

export default ProductNav