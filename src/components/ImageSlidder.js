import React from 'react'

function ImageSlidder({ articles }) {
const ImageArray = articles.slice(0, 1)
  return (
 <div className='mx-auto flex h-[43vh] md:h-[55vh] w-[screen] overflow-hidden'>
{ImageArray.map(image => <div className='w-full h-full image' key={image.urlToImage} style={{background : `url(${image.urlToImage}) no-repeat  center/cover`}} alt="not found">
  <h2 className='text-white font-bold absolute z-10 poppins text-2xl md:text-4xl text-gray-100 px-4 md:px-8 bottom-[7%]'>{image.title}</h2>
</div>)}
    </div>
  )
}

export default ImageSlidder