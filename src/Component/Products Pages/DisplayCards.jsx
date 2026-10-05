import React from 'react'
import { Box, ShoppingCart, DollarSign, Users, BarChart3, ExternalLink } from "lucide-react";


const DisplayCards = () => {

    const statCards = [
        {
            title: "Products",
            value: "2,240",
            badge: "+24 New",
            trend: "up",
            icon: Box,
            iconBg: "bg-blue-500/15",
            iconColor: "text-blue-500",
            dot: "bg-blue-500",
            subLabel: "Active Listings",
            subValue: "980",
        },
        {
            title: "Orders",
            value: "8,014",
            badge: "+120 New",
            trend: "up",
            icon: ShoppingCart,
            iconBg: "bg-indigo-500/15",
            iconColor: "text-indigo-500",
            dot: "bg-indigo-500",
            subLabel: "Total Orders",
            subValue: "105K",
        },
        {
            title: "Sales",
            value: "$17,854.22",
            badge: "+8.2%",
            trend: "up",
            icon: DollarSign,
            iconBg: "bg-emerald-500/15",
            iconColor: "text-emerald-500",
            dot: "bg-emerald-500",
            subLabel: "Today's Sales",
            subValue: "$156K",
        },
        {
            title: "Customers",
            value: "3,209",
            badge: "+36 New",
            trend: "up",
            icon: Users,
            iconBg: "bg-sky-500/15",
            iconColor: "text-sky-400",
            dot: "bg-sky-400",
            subLabel: "Total Customers",
            subValue: "58,320",
        },
        {
            title: "Revenue",
            value: "$3.50M",
            badge: "-4.5%",
            trend: "down",
            icon: BarChart3,
            iconBg: "bg-amber-500/15",
            iconColor: "text-amber-500",
            dot: "bg-amber-400",
            subLabel: "Total Revenue",
            subValue: "$12.8M",
        },
    ];
    return (
        <div className='pt-4 grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-5 gap-2'>
            {statCards.map((Data, idx) => {
                return (
                    <div key={idx} className='h-43 p-5 bg-backCol w-full grid grid-rows-3 gap-1'>
                        <div className='flex justify-between'>
                            <p>{Data.title}</p>
                            <ExternalLink size={16} />
                        </div>
                        <div className='flex justify-between items-center'>
                            <div className='flex gap-2'>
                            <div className={`${Data.iconBg} h-9 w-9  rounded-full flex items-center justify-center`}>
                                <Data.icon size={22} className={`${Data.iconColor}`} />
                            </div>
                            <p className='text-2xl font-semibold'>{Data.value}</p>
                            </div>
                            <div>
                                <p className={`text-xs px-2 py-0.5 rounded ${Data.trend === "up"
                                        ? "bg-emerald-500/15 text-emerald-400"
                                        : "bg-rose-500/15 text-rose-400"}`}>{Data.badge}</p>
                            </div>
                        </div>
                        <div className='flex items-center justify-between'>
                            <div className='flex gap-2 items-center'>
                            <div className={`h-3 w-3 rounded-full ${Data.dot}`}></div>
                            <p className='text-sm'>{Data.subLabel}</p>
                            </div>
                            <p>{Data.subValue}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default DisplayCards