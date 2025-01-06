import './ImageFullScreen.css'
import { createPortal } from 'react-dom'

export function ImageFullScreen({img,close}){
    return(
        createPortal(<div className='Overlay'>
            <img src={img} className='Image'></img>
            <button onClick={close} className='ImageButton btn btn-secondary'>Close</button>
        </div>,document.body)
    )
}