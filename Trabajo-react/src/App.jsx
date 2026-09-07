import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Reloj from './componentes/Reloj'

function App() {
  const [mostrarReloj, setMostrarReloj] = useState(true)

  return (
    <>
     <div>
      <button onClick={() => setMostrarReloj(!mostrarReloj)}>
        Mostrar / Esconder reloj
      </button>

      {mostrarReloj && <Reloj />}
    </div>
    </>
  )
}

export default App
