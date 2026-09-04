import React from 'react'
import AsideButton from './AsideButton'
import HomeLogo from '../assets/HomeLogo.svg'
import OrderLogo from '../assets/OrderLogo.svg'
import PackageLogo from '../assets/PackageLogo.svg'
import SalesLogo from '../assets/SellLogo.svg'
import '../index.css'
import { NavLink } from 'react-router-dom'

const Aside = () => {
    return (
        <aside className='bg-background w-full h-full flex flex-col gap-10 p-6 ring ring-primary shadow-xl shadow-primary'>
            <h3 className='border-2 rounded-lg p-2 text-white bg-primary'>3D-Dashboard</h3>
            <AsideButton image={HomeLogo} altText='Home' path='/'>Inicio</AsideButton>
            <AsideButton image={SalesLogo} altText='Sales' path='sales'>Ventas</AsideButton>
            <AsideButton image={OrderLogo} altText='Orders' path='orders'>Pedidos</AsideButton>
            <AsideButton image={PackageLogo} altText='Filaments' path='filaments'>Filamentos</AsideButton>
        </aside>
    )
}

export default Aside