import React from 'react'

export const ImageFullScreen = ( { closeModal, imageSelected }: { closeModal: ()=> void, imageSelected: string } ) => {
    // TODO: MEJORAR LA X DE CERRAR MODAL DE IMAGEN COMPLETA
    return (
            <div className='fixed bg-opacity-50 bg-gray-400 w-full h-full z-50 p-2 overflow-y-auto'> 
                <button 
                    className='fixed right-2 font-bold pr-4'
                    onClick={ () =>  closeModal()  }
                    >X
                </button>
                <img src={imageSelected} alt="vite" className="mx-auto" />
            </div>
    )
}
