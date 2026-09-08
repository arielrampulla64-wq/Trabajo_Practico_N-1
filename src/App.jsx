import { useState } from 'react'
import CambiarPassword from './components/CambiarPassword'
import AltaMascota from './components/AltaMascota'
import ListaTelevisores from './components/ListaTelevisores'

const EJERCICIOS = {
  ej1: { titulo: 'Ejercicio 1', Componente: CambiarPassword },
  ej2: { titulo: 'Ejercicio 2', Componente: AltaMascota },
  ej3: { titulo: 'Ejercicio 3', Componente: ListaTelevisores },
}

function App() {
  const [ejercicioActivo, setEjercicioActivo] = useState('ej1')
  const { Componente } = EJERCICIOS[ejercicioActivo]

  return (
    <div className="container py-4">
      <header className="mb-4 text-center">
        <h1>Trabajo Práctico N°1 — Desarrollo Web</h1>
        <p className="text-muted mb-0">
          Formularios, renderizado condicional, renderizado de listas y estilización con React + Bootstrap
        </p>
      </header>

      <ul className="nav nav-pills justify-content-center mb-4">
        {Object.entries(EJERCICIOS).map(([clave, { titulo }]) => (
          <li className="nav-item" key={clave}>
            <button
              className={`nav-link ${ejercicioActivo === clave ? 'active' : ''}`}
              onClick={() => setEjercicioActivo(clave)}
            >
              {titulo}
            </button>
          </li>
        ))}
      </ul>

      <main>
        <Componente />
      </main>
    </div>
  )
}

export default App
