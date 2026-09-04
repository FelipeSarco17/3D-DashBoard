import React from 'react'

const AsideButton = ({children, image, altText}:{children?: React.ReactNode, image?: string, altText?: string}) => {
  return (
    <button className='flex items-center gap-2 '>
        {image? <img src={image} alt={altText} /> : null}
        <div>
          {children}
        </div>
    </button>
  )
}

export default AsideButton