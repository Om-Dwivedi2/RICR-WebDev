import React from 'react'
import { MdCurrencyRupee } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineCurrencyBitcoin } from "react-icons/md";

const Header = () => {
  return (
    <>
        <div className='bg-blue-500 text-white px-4 py-2 text-3xl flex items-center justify-center ' >
            <MdCurrencyRupee  className='animate-bounce mx-3'/>
            
            <span className='font-bold'>Currency Convertor</span>
            <BsCurrencyDollar className='animate-ping mx-3'/>
        </div>
    
    
    </>
  )
}

export default Header
