import React from 'react'

export const InfoBussiness = () => {
  return (
    <>
        <p className='text-[22px] md:text-[28px] font-semibold mb-[12px] leading-[22px] text-black'>Ventana La Patrona</p>
        <p className='text-[14px] md:text-[16px] font-medium mb-8 leading-[21px] text-black'>Martes a Viernes 12md a 6 pm <br/> Sabado y Domingo 12md a 10pm </p>

        <div className='w-full h-full pb-12'>
          <a href='https://wa.me/+50684831377?text=Buenas,%20me%20gustaria%20' target={"_blank"}	className="block w-full sm:w-[250px] text-[15px] text-center font-semibold border border-black hover:bg-black text-black hover:text-white mx-auto px-5 py-2.5 cursor-pointer rounded-full ">Whatsapp</a>
        </div>
    </>
  )
}
