import { ImageFullScreen } from "./ImageFullScreen"
import { useState } from "react"

export function Image({index,item}){
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
        {full && <ImageFullScreen img={item} close={handleClick}></ImageFullScreen> }
        </>
    )
}