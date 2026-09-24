import React from 'react'
import { Pie,PieChart,Cell,Tooltip,ResponsiveContainer } from 'recharts'
import { RefreshCw, Star } from 'lucide-react'

const Dountgraph = () => {
    const data=[
        {Name:"Sponsored:",
        value:41,
        colors: "#40424f"
        },
        {
            Name:"Affiliate:",
            value:55,
            colors:"#f9bf59"
        },
        {
            Name:"Direct:",
            value:44,
            colors:"#236dc9"
        }
        ]

          const total = data.reduce((sum, item) => sum + item.value, 0);

        const colors =["red","green","blue"]
  return (
    <div className='w-[26%] bg-backCol p-5'>
        <div className='flex justify-between'>
            <p>Store Performance Analytics</p>
            <button className='flex gap-4 items-center h-8 border rounded p-3'><RefreshCw size={16}/>Refresh</button>
        </div>
        <div className='relative'>
        <ResponsiveContainer width="100%" height={250}>
            <PieChart>
                <Pie
                data={data}
                cx="50%"
                cy="50%"
                dataKey="value"
                innerRadius="60%"
                startAngle={90}
                endAngle={450}
                
                >
                    {
                        data.map((elem,idx)=>{
                            return<Cell key={idx} fill={elem.colors} stroke="none"/>
                        })
                    }

                    
                </Pie>
                <Tooltip 
            formatter={(value, name, props) => [value, props.payload.Name]}
            contentStyle={{ backgroundColor: '#1e1f27', border: 'none', borderRadius: '8px', color: '#fff' }}
          />
            </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <span className="text-gray-400">Total</span>
          <span className="text-gray-400 text-2xl font-semibold">{total}</span>
        </div>
        <p className='flex justify-center gap-2 items-center'>
            <Star size={16} className='fill-redCol text-redCol'/>
            POOR SALES
        </p>
        </div>
    </div>
  )
}

export default Dountgraph