import React, { useEffect, useState } from 'react'
import { ImageFullScreen } from './components/ImageFullScreen'
import { ImagesBussiness } from './components/ImagesBussiness'
import { InfoBussiness } from './components/InfoBussiness'

export const MainPage = () => {

    const [ imageSelected, setImageSelected ] = useState("");

    const handleClose = ()=>{
        setImageSelected((imageSelected) => "");
    }
    const setImage = (value: string)=>{
        setImageSelected(value);
    }
    // TODO: colorgradiente bg-gradient-to-r from-cyan-500 to-blue-500
    return (
        <>
            {/* Imagen selecionada, expandida */}
            { imageSelected ? <ImageFullScreen closeModal={ handleClose } imageSelected={imageSelected} /> : ""  }

            <header className='bg-red-800 pt-10 pb-20 px-7'>
                {/* Título, descripción y botón de whatsapp */}
                <InfoBussiness />
            </header>

            <div className='-mt-20'>
                {/* Imágenes del negocio */}
                <ImagesBussiness setImage={ setImage } />
            </div>
            
        </>
    )
}

