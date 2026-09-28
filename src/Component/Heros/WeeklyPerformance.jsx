import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { EllipsisVertical } from 'lucide-react'


const data = [
  { day: 'Mon', range: [28, 45] },
  { day: 'Tue', range: [32, 41] },
  { day: 'Wed', range: [29, 78] },
  { day: 'Thu', range: [30, 46] },
  { day: 'Fri', range: [35, 41] },
  { day: 'Sat', range: [45, 65] },
  { day: 'Sun', range: [41, 56] },
]

const DumbbellShape = ({ x, y, width, height }) => {
  const cy = y + height / 2
  return (
    <g>
      <line x1={x} y1={cy} x2={x + width} y2={cy} stroke="#236dc9" strokeWidth={2} />
      <circle cx={x} cy={cy} r={5} fill="#236dc9" />
      <circle cx={x + width} cy={cy} r={5} fill="#236dc9" />
    </g>
  )
}

const WeeklyPerformance = () => {
  return (
    <>
    <div className='flex-1 bg-backCol p-5'>
      <div className="flex justify-between items-center mb-4">
        <p className="text-gray-300 font-medium">Weekly Performance Insights</p>
        <button className="border border-gray-600 rounded p-1.5">
          <EllipsisVertical size={16} className="text-gray-300" />
        </button>
      </div>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart layout="vertical" data={data} margin={{ left: 0, right: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#3a3b48" horizontal={true} vertical={false} />
          <XAxis
            type="number"
            domain={[20, 80]}
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#8b8fa3', fontSize: 12 }}
          />
          <YAxis
            type="category"
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{ fill: '#8b8fa3', fontSize: 12 }}
          />
          <Tooltip
            cursor={false}
            formatter={(value) => [`${value[0]} - ${value[1]}`, 'Range']}
            contentStyle={{ backgroundColor: '#1e1f27', border: 'none', borderRadius: '8px', color: '#fff' }}
          />
          <Bar dataKey="range" shape={<DumbbellShape />} barSize={10} />
        </BarChart>
      </ResponsiveContainer>
    </div>
    </>
  )
}

export default WeeklyPerformance