import { useState } from 'react'
import { CloudUpload, Download, ChevronLeft, ChevronRight, ArrowUpDown } from 'lucide-react'

const orders = [
  { id: '#ORD-1023', name: 'John Carter', email: 'john@example.com', date: '2025-11-12', amount: 249, payment: 'Credit Card', status: 'Completed' },
  { id: '#ORD-1022', name: 'Emma Wilson', email: 'emma@example.com', date: '2025-11-12', amount: 179, payment: 'UPI', status: 'Pending' },
  { id: '#ORD-1021', name: 'Michael Harris', email: 'michael@example.com', date: '2025-11-11', amount: 329, payment: 'PayPal', status: 'Completed' },
  { id: '#ORD-1020', name: 'Sophia Turner', email: 'sophia@example.com', date: '2025-11-11', amount: 125, payment: 'Debit Card', status: 'Cancelled' },
  { id: '#ORD-1019', name: 'Chris Evans', email: 'chris@example.com', date: '2025-11-10', amount: 560, payment: 'Credit Card', status: 'Completed' },
  // page 2 ke liye dummy data, apna real data daal dena
  { id: '#ORD-1018', name: 'Olivia Brown', email: 'olivia@example.com', date: '2025-11-09', amount: 210, payment: 'UPI', status: 'Completed' },
  { id: '#ORD-1017', name: 'Liam Smith', email: 'liam@example.com', date: '2025-11-09', amount: 95, payment: 'PayPal', status: 'Pending' },
  { id: '#ORD-1016', name: 'Ava Johnson', email: 'ava@example.com', date: '2025-11-08', amount: 415, payment: 'Credit Card', status: 'Completed' },
  { id: '#ORD-1015', name: 'Noah Davis', email: 'noah@example.com', date: '2025-11-08', amount: 150, payment: 'Debit Card', status: 'Cancelled' },
  { id: '#ORD-1014', name: 'Mia Miller', email: 'mia@example.com', date: '2025-11-07', amount: 305, payment: 'UPI', status: 'Completed' },
]

const columns = [
  { label: '#ID', key: 'id' },
  { label: 'CUSTOMER', key: 'name' },
  { label: 'DATE', key: 'date' },
  { label: 'AMOUNT', key: 'amount' },
  { label: 'PAYMENT', key: 'payment' },
  { label: 'STATUS', key: 'status' },
]

const statusStyles = {
  Completed: 'bg-green-500/15 text-green-400 border-green-500/30',
  Pending: 'bg-yellow-500/15 text-yellow-500 border-yellow-500/30',
  Cancelled: 'bg-red-500/15 text-red-400 border-red-500/30',
}

const perPage = 5

const RecentOrders = () => {
  const [page, setPage] = useState(1)
  const [sortKey, setSortKey] = useState(null)
  const [sortDir, setSortDir] = useState('asc')

  function handleSort(key) {
    if (sortKey === key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc')   // same column dobara click = direction ulta
    } else {
      setSortKey(key)
      setSortDir('asc')
    }
    setPage(1)   // sort badalne pe pehle page pe wapas
  }

  // Sort (original array ko touch nahi karte, copy banate hain)
  const sorted = [...orders].sort((a, b) => {
    if (!sortKey) return 0
    const x = a[sortKey]
    const y = b[sortKey]
    if (x < y) return sortDir === 'asc' ? -1 : 1
    if (x > y) return sortDir === 'asc' ? 1 : -1
    return 0
  })

  const totalPages = Math.ceil(sorted.length / perPage)
  const start = (page - 1) * perPage
  const visible = sorted.slice(start, start + perPage)
  const end = Math.min(page * perPage, sorted.length)

  function formatDate(iso) {
    return new Date(iso).toLocaleDateString('en-GB', {
      day: '2-digit', month: 'short', year: 'numeric',
    })
  }

  return (
    <div className="bg-backCol rounded-lg text-gray-300 lg:w-full col-start-1 sm:col-end-3 lg:col-end-2">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-5">
        <p className="">
          Recent Orders <span className="text-sm text-gray-500">(186.25k Transactions)</span>
        </p>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 border border-gray-600 rounded px-3 py-1.5 text-sm">
            <CloudUpload size={16} /> Export
          </button>
          <button className="flex items-center gap-2 bg-[#2E2D3C] rounded px-3 py-1.5 text-sm">
            <Download size={16} /> Import
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-y border-dashed border-gray-700 text-xs text-gray-400">
              {columns.map((col) => (
                <th
                  key={col.key}
                  onClick={() => handleSort(col.key)}
                  className="px-6 py-3 font-semibold cursor-pointer select-none"
                >
                  <span className="flex items-center gap-1.5 ">
                    {col.label}
                    <ArrowUpDown
                      size={12}
                      className={sortKey === col.key ? 'text-blue-500' : ''}
                    />
                  </span>
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {visible.map((o) => (
              <tr key={o.id} className="border-b text-sm border-gray-800">
                <td className="px-6 py-4">{o.id}</td>
                <td className="px-6 py-4">
                  <p className="font-medium text-gray-200">{o.name}</p>
                  <p className="text-xs text-gray-500">{o.email}</p>
                </td>
                <td className="px-6 py-4">{formatDate(o.date)}</td>
                <td className="px-6 py-4">${o.amount.toFixed(2)}</td>
                <td className="px-6 py-4">{o.payment}</td>
                <td className="px-6 py-4">
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded border ${statusStyles[o.status]}`}>
                    {o.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer / Pagination */}
      <div className="flex justify-between items-center px-6 py-4">
        <p className="text-sm text-gray-500">
          Showing {start + 1} to {end} of {sorted.length} orders
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

export default RecentOrders