import React from 'react'
import { LuPhone } from "react-icons/lu";
import { BsCurrencyDollar } from "react-icons/bs";
const PhoneIcon = LuPhone as React.FC<{ size?: number,  }>;
const PriceIcon = BsCurrencyDollar as React.FC<{ size?: number,  }>;
const Section1 = () => {
  return (
    <div>
    <div className='bg-[#FAB107] h-[92px] lg:px-[120px] px-10 flex items-center justify-center gap-[200px] font-bold text-white text-[16px]'>
      <div className='flex gap-4 items-center'>
    <span><img src="/images/phone.png" className="h-8" alt="Phone Icon" /></span>
      <span>Book service</span>
      </div>
      <div className='flex gap-4 items-center'><span><img src="/images/dollar.png" className="h-8" alt="Dollar Icon" /></span><span>Pricing</span></div>
    </div>
    <div className='w-full h-full'>
        <img src="/images/section-2.png" className="h-full" alt="bg" />
    </div>
    </div>
  )
}

export default Section1
