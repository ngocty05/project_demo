
import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
const EmailIcon = MdOutlineEmail as React.FC<{ size?: number,  }>;
const PhoneIcon = LuPhone as React.FC<{ size?: number,  }>;
const ArrowDown = IoIosArrowDown as React.FC<{ size?: number,  }>;

const TopHeader = () => {
  return (
    <div className="lg:h-[36px] bg-[#F9AE08] lg:flex items-center text-white lg:px-[120px] px-10 justify-between block">
      <div className='lg:flex gap-5 items-center block'>
        <span><EmailIcon size={20} /></span>
        <span>ngcons.connection@gmail.com</span>
        <span className="lg:block hidden">|</span>
        <span className='flex gap-3 items-center'><PhoneIcon size={18}/> 0922063999</span>
      </div>
      <div className='flex items-center gap-3'>
        <span>Eng</span>
        <span><ArrowDown size={18}/> </span>
      </div>
    </div>
  )
}

export default TopHeader
