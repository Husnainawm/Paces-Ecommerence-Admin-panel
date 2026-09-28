import { useState } from 'react'
import { CloudUpload, Download, ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  { name: 'Modern Fabric Sofa Set', by: 'Homeluxe', price: 499, qty: 34, status: 'Low Stock', img: 'src/assets/Product/1.png' },
  { name: 'L-Shaped Sectional Sofa', by: 'ComfortHub', price: 899, qty: 21, status: 'In Stock', img: 'src/assets/Product/2.png' },
  { name: 'Velvet Recliner Chair', by: 'SoftEase', price: 379, qty: 47, status: 'In Stock', img: 'src/assets/Product/3.png' },
  { name: 'Classic Wooden Coffee Table', by: 'OakCraft', price: 259, qty: 58, status: 'Out of Stock', img: 'src/assets/Product/4.png' },
  { name: 'Minimalist TV Stand', by: 'FurniPro', price: 315, qty: 64, status: 'In Stock', img: 'src/assets/Product/5.png' },
  { name: 'Leather Lounge Chair', by: 'UrbanStyle', price: 425, qty: 39, status: 'Low Stock', img: 'src/assets/Product/6.png' },
  { name: 'Glass Center Table', by: 'CrystalCasa', price: 289, qty: 52, status: 'In Stock', img: 'src/assets/Product/7.png' },
  { name: 'Wooden Bookshelf Unit', by: 'TimberWorks', price: 349, qty: 28, status: 'Low Stock', img: 'src/assets/Product/8.png' },
  { name: 'Luxury King Bed Frame', by: 'DreamRest', price: 1099, qty: 15, status: 'In Stock', img: 'src/assets/Product/9.png' },
  { name: 'Round Dining Table Set', by: 'CasaDine', price: 725, qty: 25, status: 'Out of Stock', img: 'src/assets/Product/10.png' },
  { name: 'Ergonomic Office Chair', by: 'WorkEase', price: 269, qty: 44, status: 'In Stock', img: 'src/assets/Product/1.png' },
  { name: 'Nightstand with Drawers', by: 'CozyHome', price: 189, qty: 53, status: 'Low Stock', img: 'src/assets/Product/5.png' },
]

const statusStyles = {
  'In Stock': 'bg-green-500/15 text-green-400',
  'Low Stock': 'bg-yellow-500/15 text-yellow-500',
  'Out of Stock': 'bg-red-500/15 text-red-400',
}

const perPage = 6

const TopProducts = () => {
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(products.length / perPage)
  const start = (page - 1) * perPage
  const visible = products.slice(start, start + perPage)
  const end = Math.min(page * perPage, products.length)

  return (
    <div className="bg-backCol rounded-lg text-gray-300 flex-1">
      
      <div className="flex justify-between items-center px-6 py-5 border-b border-dashed border-gray-700">
        <p className="font-medium">Top Selling Products</p>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 border border-gray-600 rounded px-3 py-1.5 text-sm">
            <CloudUpload size={16} /> Export
          </button>
          <button className="flex items-center gap-2 bg-[#2E2D3C] rounded px-3 py-1.5 text-sm">
            <Download size={16} /> Import
          </button>
        </div>
      </div>
      {visible.map((p, i) => (
        <div
          key={p.name}
          className="flex items-center px-6 py-4 border-b border-gray-800"
        >
          {/* Image + name */}
          <div className="flex items-center gap-4 w-[38%]">
            <div className="w-10 h-10 rounded bg-[#2E2D3C] overflow-hidden shrink-0">
              {p.img && <img src={p.img} alt={p.name} className="w-full h-full object-cover" />}
            </div>
            <div>
              <p className="font-medium text-gray-200">{p.name}</p>
              <p className="text-sm text-gray-500">By: {p.by}</p>
            </div>
          </div>
          <div className="w-[16%]">
            <p className="font-semibold text-gray-200">${p.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">Price</p>
          </div>
          <div className="w-[14%]">
            <p className="font-semibold text-gray-200">{p.qty}</p>
            <p className="text-sm text-gray-500">Quantity</p>
          </div>
          <div className="w-[18%]">
            <p className="font-semibold text-gray-200">
              ${(p.price * p.qty).toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </p>
            <p className="text-sm text-gray-500">Amount</p>
          </div>
          <span className={`text-xs font-medium px-3 py-1 rounded-full ${statusStyles[p.status]}`}>
            {p.status}
          </span>
        </div>
      ))}
      <div className="flex justify-between items-center px-6 py-4">
        <p className="text-sm text-gray-500">
          Showing {start + 1} to {end} of {products.length} products
        </p>

        <div className="flex gap-2">
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
            className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded disabled:opacity-40"
          >
            <ChevronLeft size={16} />
          </button>

          {Array.from({ length: totalPages }, (_, idx) => (
            <button
              key={idx}
              onClick={() => setPage(idx + 1)}
              className={`w-8 h-8 rounded text-sm ${
                page === idx + 1 ? 'bg-blue-600 text-white' : 'border border-gray-600'
              }`}
            >
              {idx + 1}
            </button>
          ))}

          <button
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
            className="w-8 h-8 flex items-center justify-center border border-gray-600 rounded disabled:opacity-40"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default TopProducts