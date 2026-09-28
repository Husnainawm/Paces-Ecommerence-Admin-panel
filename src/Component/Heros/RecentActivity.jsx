import { EllipsisVertical, ShoppingCart, CreditCard, Package, User } from 'lucide-react'

const activities = [
  {
    title: 'New Orders Synced from Storefront',
    desc: '1,250 new customer orders were successfully imported from the online store.',
    by: 'Olivia Green',
    icon: ShoppingCart,
    color: 'bg-[#236dc9]',
  },
  {
    title: 'Payment Gateway Integration Updated',
    desc: 'Stripe API upgraded to support faster settlements and improved security tokens.',
    by: 'James Parker',
    icon: CreditCard,
    color: 'bg-[#02bc9c]',
  },
  {
    title: 'Inventory Levels Auto-Synced',
    desc: 'All product quantities were updated based on the latest warehouse data.',
    by: 'Sophia Lee',
    icon: Package,
    color: 'bg-[#f9bf59]',
  },
  {
    // screenshot mein ye item kata hua tha, text aur naam apna daal lena
    title: 'New Vendor Accounts Approved',
    desc: 'Five new seller accounts were verified and added to the marketplace.',
    by: 'Ethan Brooks',
    icon: User,
    color: 'bg-[#4fb6d8]',
  },
]

const RecentActivity = () => {
  return (
    <div className="bg-backCol rounded-lg text-gray-300 flex-1">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-5 border-b border-dashed border-gray-700">
        <p className="font-medium">Recent Activity</p>
        <button className="border border-gray-600 rounded p-1.5">
          <EllipsisVertical size={16} />
        </button>
      </div>

      {/* Scrollable timeline */}
      <div
        className="max-h-100 overflow-y-auto px-6 py-5
          [&::-webkit-scrollbar]:w-1
          [&::-webkit-scrollbar-track]:bg-transparent
          [&::-webkit-scrollbar-thumb]:bg-gray-600
          [&::-webkit-scrollbar-thumb]:rounded-full"
      >
        {activities.map((a, i) => {
          const Icon = a.icon
          const isLast = i === activities.length - 1

          return (
            <div key={a.title} className="relative flex gap-4 pb-8">
              {/* Dashed line, last item ke baad nahi chahiye */}
              {!isLast && (
                <span className="absolute left-4 top-9 bottom-1 border-l border-dashed border-gray-600" />
              )}

              {/* Icon circle */}
              <div
                className={`w-8 h-8 rounded-full ${a.color} flex items-center justify-center shrink-0`}
              >
                <Icon size={15} className="text-white" />
              </div>

              {/* Text */}
              <div>
                <p className="font-medium text-gray-200">{a.title}</p>
                <p className="text-sm text-gray-500 mt-1">{a.desc}</p>
                <p className="text-sm text-blue-500 mt-2">By {a.by}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RecentActivity