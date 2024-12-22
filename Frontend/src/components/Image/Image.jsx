import { ImageFullScreen } from "./ImageFullScreen"
import { useState } from "react"

export function Image({index,item,isFullNeed}){
    const[full,setFull]=useState(false)
    function handleClick(){
        setFull(!full)
    }
    return(
        <>
        <img 
        className='masonry__img'
        src={item} 
        key={index} 
        alt=""
        style={{width:'100%',display:'block',borderRadius:"10px"}}
        onClick={handleClick}
        />
        {isFullNeed && full && <ImageFullScreen img={item} full={handleClick}></ImageFullScreen> }
        </>
    )
}