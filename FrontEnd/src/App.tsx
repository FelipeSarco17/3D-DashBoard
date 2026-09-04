import { useState } from 'react'
import './App.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import routes from './utils/routes'
import Aside from './components/Aside'


const router = createBrowserRouter(routes)

function App() {
  

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
