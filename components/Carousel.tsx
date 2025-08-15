'use client'

import { useState } from "react"

type CarouselProps = {
    imageUrls : string[]
}

export default function Carousel({imageUrls}: CarouselProps){
    const[index, setImageIndex] = useState(0)

    return (
        <div>
            <img src={imageUrls[index]} alt="" />
            <div>
                {imageUrls.map((_,index)=>(
                    <button key={index} onClick={()=> setImageIndex(index)}>{index}</button>
                ))}
            </div>

        </div>
    )

}