import { useState } from 'react'
import {
  ComposedChart, Area, Line, XAxis, YAxis, CartesianGrid,
  Tooltip, Legend, ResponsiveContainer,
} from 'recharts'
import { Wallet, ShoppingBasket, TrendingUp } from 'lucide-react'

const revenue = [21,21,21,35,35,35,44,44,44,54,54,54,48,48,76,76,95,95,76,76,32,32,46,48,48]
const orders  = [40,40,40,50,50,35,27,27,27,15,15,27,27,36,36,33,33,34,35,33,50,50,55,55,55]

const data = revenue.map((rev, i) => ({
  day: i + 1,
  revenue: rev,
  orders: orders[i],
}))

const stats = [
  { label: 'Revenue', value: '$78,224.68', icon: Wallet, color: 'text-green-400' },
  { label: 'Orders', value: '8,541', icon: ShoppingBasket, color: 'text-green-400' },
  { label: 'Growth Rate', value: '25.30%', icon: TrendingUp, color: 'text-green-400' },
]

const tabs = ['Today', 'Monthly', 'Annual']

const SalesReport = () => {
  const [activeTab, setActiveTab] = useState('Monthly')

  return (
    <div className="bg-backCol rounded-lg text-gray-300 w-[50%]">
      {/* Header + tabs */}
      <div className="flex justify-between items-center px-6 pt-5 border-b border-dashed border-gray-700">
        <p className="pb-4 font-medium">
          Sales Report <span className="text-sm text-gray-500">(25822 Orders)</span>
        </p>
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-medium border-b-2 ${
                activeTab === tab
                  ? 'text-blue-500 border-blue-500'
                  : 'text-white border-transparent'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Stats row */}
      <div className="flex justify-around py-4 border-b border-dashed border-gray-700">
        {stats.map((s) => {
          const Icon = s.icon
          return (
            <div key={s.label} className="flex flex-col items-center gap-1">
              <span className="text-sm text-gray-400">{s.label}</span>
              <div className="flex items-center gap-2">
                <Icon size={16} className={s.color} />
                <span className="text-lg font-semibold text-gray-200">{s.value}</span>
              </div>
            </div>
          )
        })}
      </div>

      {/* Chart */}
      <div className="relative px-4 py-4">
        {/* Overlay text */}
        <div className="absolute top-8 left-20 max-w-xs z-10 pointer-events-none">
          <p className="font-semibold text-gray-200 text-sm">Today's Earning: $8,975.30</p>
          <p className="text-sm text-gray-500 mt-2">
            Property PS007 is not receiving hits. Either your site is not receiving any sessions.
          </p>
        </div>

        <ResponsiveContainer width="100%" height={350}>
          <ComposedChart data={data}>
            <defs>
              <linearGradient id="revGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7b70ef" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#7b70ef" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#3a3b48" vertical={false} />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#6b7a99', fontSize: 12 }} />
            <YAxis
              domain={[0, 100]}
              ticks={[0, 25, 50, 75, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6b7a99', fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{ backgroundColor: '#1e1f27', border: 'none', borderRadius: '8px', color: '#fff' }}
            />
            <Legend iconType="circle" />

            <Area
              type="monotone"
              dataKey="revenue"
              name="Total Revenue"
              stroke="#7b70ef"
              strokeWidth={3}
              fill="url(#revGradient)"
            />
            <Line
              type="monotone"
              dataKey="orders"
              name="Orders"
              stroke="#02bc9c"
              strokeWidth={2}
              strokeDasharray="5 5"
              strokeOpacity={0.6}
              dot={false}
            />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default SalesReport