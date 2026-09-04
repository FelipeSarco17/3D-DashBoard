import React from 'react'
import AsideButton from './AsideButton'

const Aside = () => {
    return (
        <aside className='bg-primary w-1/6 h-full text-white p-6'>
            <h3>3D-Dashboard</h3>
            <div>
                <AsideButton>Filamentos</AsideButton>
                <AsideButton>Pedidos</AsideButton>
                <AsideButton>Ventas</AsideButton>
            </div>

        </aside>
    )
}

export default Aside