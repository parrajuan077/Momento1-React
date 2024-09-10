import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carrusel from './Components/Carrusel'
import Navb from './Components/Navb'
import Botones from './Components/Botones'


<Navb></Navb>
function App() {
  return (
    <>
      <div>
        <Carrusel></Carrusel>
        <Navb></Navb>
        <h1>Computer And Laptop Accessories</h1>
        <button className='my-botoon'>Buy Now</button>
        <button className='my-botoon'>Buy Conctac</button>
      </div>
     
    </>
  )
}

export default App
