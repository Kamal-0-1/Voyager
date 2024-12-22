import React from 'react'
import Masonry, {ResponsiveMasonry} from 'react-responsive-masonry'
import galleryImages from './galleryImages'
import { Image } from '../Image/Image'


const MasonryImagesGallery = () => {
    return (
<ResponsiveMasonry columnsCountBreakPoints={{350:1, 768:3, 992:4}}>
<Masonry gutter='1rem'>
{
    galleryImages.map((item,index)=>(
        <Image item={item} key={index} isFullNeed={true}></Image>
    ))
}
</Masonry>
</ResponsiveMasonry>
  )
}

export default MasonryImagesGallery
