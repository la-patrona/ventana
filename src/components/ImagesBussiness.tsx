
export const ImagesBussiness = ( { setImage } : { setImage: (value:string) => void }) => {

    const imageList = [
        "portada.jpeg",
        "menu1.jpeg",
        "menu2.jpeg",
        "menu3.jpeg",
    ]

    return (
        <>
            <div className="w-full">
                { 
                    imageList.map( (image: string, index: number) => {
                        return <img key={index} src={image} alt="vite" className="w-11/12 sm:w-[500px] lg:w-[600px] mx-auto mb-[20px] rounded-xl cursor-pointer" onClick={() => setImage(image) }/>
                    })
                }
            </div>
            
        </>
    )
}
