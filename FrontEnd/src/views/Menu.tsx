import { Outlet } from 'react-router'
import Aside from '../components/Aside'


const MenuPage = () => {
  return (



    <main className='w-full h-screen bg-background grid grid-cols-10 grid-rows-1'>
      <div className='col-span-2'>
        <Aside />
      </div>

      <section className='justify-self-center self-center col-span-8 h-screen'>
        <Outlet />
      </section>
    </main>
  )
}

export default MenuPage