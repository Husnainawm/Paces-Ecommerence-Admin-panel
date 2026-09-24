import React from 'react'
import { useState, useEffect, } from 'react';
import { ShoppingCart, ArrowDown, PiggyBank, TrendingUp, ArrowUp, Calendar, Clock } from 'lucide-react';


const Sectionone = () => {

    const order = [
        {
            Sector: "ORDERS",
            icon: ShoppingCart,
            value: "9,754",
            arrow: ArrowDown,
            percentage: "1.97%",
            Since: "Since last month"
        },

        {
            Sector: "REVENUE",
            icon: PiggyBank,
            value: "$75.21k",
            arrow: ArrowDown,
            percentage: " 5.23%",
            Since: "Since last month"
        },

        {
            Sector: "GROWTH",
            icon: TrendingUp,
            value: "+25.08%",
            arrow: ArrowUp,
            percentage: "5.23%",
            Since: "Since last month"
        }
    ]

    const today = new Date().toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
    });

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    return (
        <>
            <div className='w-[60%] gap-5 flex flex-wrap'>
                <div className='h-45 w-80 flex flex-col  bg-backCol ' >
                    <div className='p-5 pb-0 flex flex-1 justify-between items-center'>
                        <div>
                            <p className='text-sm'>
                                GOOD DAY,
                            </p>
                            <p className='text-lg font-bold'>
                                David Dev!
                            </p>
                        </div>
                        <img className='h-20' src="public\email-campaign.svg" alt="" />
                    </div>
                    <div className='flex justify-between p-2 h-13 bg-gray-700'>
                        <div className='flex items-center gap-1'>
                            <Calendar size={15} />
                            <p>{today}</p>
                        </div>
                        <div className='flex items-center gap-1'>
                            <Clock size={15} />
                            <p>{time.toLocaleTimeString()}</p>
                        </div>
                    </div>
                </div>

                {
                    order.map((elem, idx) => {
                        return (
                            <div key={idx} className='h-45 w-80 flex justify-between p-5  bg-backCol' >
                                <div className='flex flex-col justify-between h-full'>
                                <p className='text-sm'>{elem.Sector}</p>
                                <p className='text-xl font-bold '>{elem.value}</p>
                                <div className=' flex gap-3'>
                                    <p    key={idx}  
                                    className={   idx < 2 
                                         ? 'text-redCol flex text-sm gap-1 items-center'  : 'text-greenCol flex text-sm gap-1 items-center' 
                                            

                                        } ><elem.arrow size={15}/>{elem.percentage}</p>
                                    <p className='text-sm'>{elem.Since}</p>
                                </div>
                                </div>
                                <div className='bg-linear-to-br from-[#3b4088] to-[#353c8f] h-10 w-10 rounded-full flex items-center justify-center'>
                                    <elem.icon className='text-blueCol '/>
                                </div>
                            </div>
                        )
                    })
                }





            </div>
        </>
    )
}

export default Sectionone