import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Albergue from './Pages/Albergue'
import Altura from './Pages/Altura'
import Crescimento from './Pages/Crescimento'
import ContagemNumeros from './Pages/ContagemNumeros'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Albergue />

      <Altura />

      <Crescimento/>

      <ContagemNumeros />
    </>
  )
}

export default App
