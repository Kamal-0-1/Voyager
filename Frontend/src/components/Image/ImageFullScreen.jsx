import './ImageFullScreen.css'


export function ImageFullScreen({img,full}){
    return(
        <div className='Overlay'>
            <img src={img} className='Image'></img>
            <button onClick={full} className='ImageButton btn btn-secondary'>Close</button>
        </div>
    )
}