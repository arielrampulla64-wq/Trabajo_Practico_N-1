import { useState } from 'react'
import televisores from '../data/televisores'

// Definimos los filtros disponibles: cada uno tiene una etiqueta y una función
const FILTROS = {
  todos: {
    etiqueta: 'a) Lista completa',
    fn: () => true,
  },
  sinWifi: {
    etiqueta: 'b) Sin WiFi',
    fn: (tv) => tv.wifi === false,
  },
  googleTv: {
    etiqueta: 'c) Sistema operativo Google TV',
    fn: (tv) => tv.sistema_operativo === 'Google TV',
  },
  samsungConWifi: {
    etiqueta: 'd) Samsung con WiFi',
    fn: (tv) => tv.marca === 'Samsung' && tv.wifi === true,
  },
}

function ListaTelevisores() {
  const [filtroActivo, setFiltroActivo] = useState('todos')

  const televisoresFiltrados = televisores.filter(FILTROS[filtroActivo].fn)

  return (
    <div className="card tp-card p-4">
      <h3 className="mb-3">Ejercicio 3 — Televisores</h3>

      {/* Botones para cambiar el filtro (controlan el renderizado condicional/de listas) */}
      <div className="btn-group flex-wrap mb-3" role="group">
        {Object.entries(FILTROS).map(([clave, { etiqueta }]) => (
          <button
            key={clave}
            type="button"
            className={`btn ${
              filtroActivo === clave ? 'btn-primary' : 'btn-outline-primary'
            }`}
            onClick={() => setFiltroActivo(clave)}
          >
            {etiqueta}
          </button>
        ))}
      </div>

      <p className="text-muted">
        Mostrando {televisoresFiltrados.length} de {televisores.length} televisores.
      </p>

      {/* Renderizado condicional: si no hay resultados, mostramos un aviso en vez de la tabla */}
      {televisoresFiltrados.length === 0 ? (
        <div className="alert alert-warning mb-0">
          No hay televisores que cumplan con este filtro.
        </div>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Marca</th>
                <th>Pulgadas</th>
                <th>Sistema operativo</th>
                <th>WiFi</th>
              </tr>
            </thead>
            <tbody>
              {/* Renderizado de listas con .map() */}
              {televisoresFiltrados.map((tv) => (
                <tr key={tv.id}>
                  <td>{tv.id}</td>
                  <td>{tv.marca}</td>
                  <td>{tv.pulgadas}"</td>
                  <td>{tv.sistema_operativo}</td>
                  <td>
                    <span
                      className={`badge ${tv.wifi ? 'bg-success' : 'bg-secondary'}`}
                    >
                      {tv.wifi ? 'Sí' : 'No'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default ListaTelevisores
