import React from 'react'

const Footer = () => {
  return (
    <>
    <div className="footer flex items-start flex-col gap-20 py-8 mx-56 border-t border-t-[#5f6368]">
        <div className="footer-top flex items-start gap-14">
            <div className="wrapper flex flex-col gap-2 ">
                <h1 className='text-xl font-medium'>Google Play</h1>
                <a href='/' className='text-[#5F6368] hover:text-[#01875F] transition-all ease-in-out duration-200 hover:underline cursor-pointer'>Play Pass</a>
                <a href='/' className='text-[#5F6368] hover:text-[#01875F] transition-all ease-in-out duration-200 hover:underline cursor-pointer'>Play Points</a>
                <a href='/' className='text-[#5F6368] hover:text-[#01875F] transition-all ease-in-out duration-200 hover:underline cursor-pointer'>Подарочные карты</a>
                <a href='/' className='text-[#5F6368] hover:text-[#01875F] transition-all ease-in-out duration-200 hover:underline cursor-pointer'>Использовать бонус</a>
                <a href='/' className='text-[#5F6368] hover:text-[#01875F] transition-all ease-in-out duration-200 hover:underline cursor-pointer'>Правила возврата платежей</a>
            </div>
            <div className="wrapper flex flex-col gap-2 ">
                <h1 className='text-xl font-medium'>Дети и семья</h1>
                <a href='/' className='text-[#5F6368] hover:text-[#01875F] transition-all ease-in-out duration-200 hover:underline cursor-pointer'>Руководство для родителей</a>
                <a href='/' className='text-[#5f6368] hover:text-[#01875F] transition-all ease-in-out duration-200 hover:underline cursor-pointer'>Семейный доступ</a>
            </div>
        </div>
        <div className="footer-bottom">
            <div className="wrapper flex items-center gap-12">
            <a href='/' className='text-[#5F6368] hover:text-[#01875F] transition-all ease-in-out duration-200 hover:underline cursor-pointer'>Условия использования</a>
            <a href='/' className='text-[#5F6368] hover:text-[#01875F] transition-all ease-in-out duration-200 hover:underline cursor-pointer'>Конфиденциальность</a>
            <a href='/' className='text-[#5F6368] hover:text-[#01875F] transition-all ease-in-out duration-200 hover:underline cursor-pointer'>О Google Play

</a>
            <a href='/' className='text-[#5F6368] hover:text-[#01875F] transition-all ease-in-out duration-200 hover:underline cursor-pointer'>Для разработчиков</a>
            <a href='/' className='text-[#5F6368] hover:text-[#01875F] transition-all ease-in-out duration-200 hover:underline cursor-pointer'>Google Store</a>
    
            </div>
            <div className="wrapper"></div>
        </div>
    </div>
    </>
  )
}

export default Footer
