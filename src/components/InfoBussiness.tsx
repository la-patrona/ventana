import React from 'react'

export const InfoBussiness = () => {
  return (
    <>
        <p className='text-[22px] md:text-[28px] font-semibold mb-[12px] leading-[22px]'>Bar y Restaurante La Pollera</p>
        <p className='text-[14px] md:text-[16px] font-medium mb-8 leading-[21px]'>Descripcion</p>

        <div className='w-full h-full pb-12'>
          <a href='https://wa.me/+50624780213?text=Buenas,%20me%20gustaria%20' target={"_blank"}	className="block w-full sm:w-[250px] text-[15px] text-center font-semibold border border-white hover:bg-white hover:text-black mx-auto px-5 py-2.5 cursor-pointer rounded-full ">Whatsapp</a>
        </div>
    </>
  )
}
