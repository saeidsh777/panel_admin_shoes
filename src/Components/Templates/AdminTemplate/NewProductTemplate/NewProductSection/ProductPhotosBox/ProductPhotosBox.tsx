import ProductMainPhotoInput from '@/Components/Modules/Inputs/ProductMainPhotoInput/ProductMainPhotoInput'
import ProductPhotoInput from '@/Components/Modules/Inputs/ProductPhotoInput/ProductPhotoInput'
import React from 'react'

export default function ProductPhotosBox() {
  return (
    <div>
            <ProductMainPhotoInput/>
        <div className='mt-8 flex flex-wrap gap-2 justify-center'>
            <ProductPhotoInput name='image_1'/>
            <ProductPhotoInput name='image_2'/>
            <ProductPhotoInput name='image_3'/>
            <ProductPhotoInput name='image_4'/>
            <ProductPhotoInput name='image_5'/>
            <ProductPhotoInput name='image_6'/>
        </div>
    </div>
  )
}
