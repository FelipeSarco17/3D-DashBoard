import React from 'react'
import { NavLink } from 'react-router-dom'


const AsideButton = ({children, image, altText,path}:{children?: React.ReactNode, image?: string, altText?: string, path: string}) => {
  return (
    <div className='flex items-center gap-2 font-semibold'>
        <img src={image} alt={altText} className='w-6 h-6'/>
        <NavLink to={path}>{children}</NavLink>
    </div>
  )
}

export default AsideButton