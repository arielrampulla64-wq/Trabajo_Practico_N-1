import { useState } from 'react'

const valoresIniciales = {
  nombre: '',
  fechaNacimiento: '',
  edad: '',
  raza: '',
  foto: null,
  telefonoContacto: '',
  bozal: false,
  puedeConsumirGolosinas: false,
}

function AltaMascota() {
  const [form, setForm] = useState(valoresIniciales)
  const [fotoPreview, setFotoPreview] = useState(null)
  const [mascotaGuardada, setMascotaGuardada] = useState(null)

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target

    if (type === 'checkbox') {
      setForm((prev) => ({ ...prev, [name]: checked }))
      return
    }

    if (type === 'file') {
      const archivo = files[0] || null
      setForm((prev) => ({ ...prev, foto: archivo }))
      setFotoPreview(archivo ? URL.createObjectURL(archivo) : null)
      return
    }

    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Guardamos una copia de los datos cargados para mostrar el resumen (renderizado condicional)
    setMascotaGuardada({ ...form, fotoUrl: fotoPreview })
  }

  const handleLimpiar = () => {
    setForm(valoresIniciales)
    setFotoPreview(null)
    setMascotaGuardada(null)
  }

  return (
    <div className="card tp-card p-4">
      <h3 className="mb-3">Ejercicio 2 — Alta de mascota (peluquería canina)</h3>

      <form onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-md-6">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              required
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="raza" className="form-label">
              Raza
            </label>
            <input
              type="text"
              className="form-control"
              id="raza"
              name="raza"
              value={form.raza}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-4">
            <label htmlFor="fechaNacimiento" className="form-label">
              Fecha de nacimiento
            </label>
            <input
              type="date"
              className="form-control"
              id="fechaNacimiento"
              name="fechaNacimiento"
              value={form.fechaNacimiento}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-2">
            <label htmlFor="edad" className="form-label">
              Edad
            </label>
            <input
              type="number"
              min="0"
              className="form-control"
              id="edad"
              name="edad"
              value={form.edad}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="telefonoContacto" className="form-label">
              Teléfono de contacto
            </label>
            <input
              type="tel"
              className="form-control"
              id="telefonoContacto"
              name="telefonoContacto"
              value={form.telefonoContacto}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="foto" className="form-label">
              Foto
            </label>
            <input
              type="file"
              accept="image/*"
              className="form-control"
              id="foto"
              name="foto"
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6 form-check form-switch ms-1">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="bozal"
              name="bozal"
              checked={form.bozal}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="bozal">
              Usa bozal
            </label>
          </div>

          <div className="col-md-6 form-check form-switch ms-1">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="puedeConsumirGolosinas"
              name="puedeConsumirGolosinas"
              checked={form.puedeConsumirGolosinas}
              onChange={handleChange}
            />
            <label className="form-check-label" htmlFor="puedeConsumirGolosinas">
              Puede consumir golosinas
            </label>
          </div>
        </div>

        <div className="mt-4 d-flex gap-2">
          <button type="submit" className="btn btn-success">
            Guardar mascota
          </button>
          <button type="button" className="btn btn-outline-secondary" onClick={handleLimpiar}>
            Limpiar
          </button>
        </div>
      </form>

      {/* Renderizado condicional: solo se muestra si ya se guardó una mascota */}
      {mascotaGuardada && (
        <div className="alert alert-success mt-4">
          <h5 className="mb-3">Mascota registrada</h5>
          <div className="d-flex align-items-center gap-3">
            {mascotaGuardada.fotoUrl && (
              <img
                src={mascotaGuardada.fotoUrl}
                alt={mascotaGuardada.nombre}
                width="80"
                height="80"
                className="rounded-circle object-fit-cover border"
              />
            )}
            <ul className="mb-0">
              <li><strong>Nombre:</strong> {mascotaGuardada.nombre}</li>
              <li><strong>Raza:</strong> {mascotaGuardada.raza || '-'}</li>
              <li><strong>Fecha de nacimiento:</strong> {mascotaGuardada.fechaNacimiento || '-'}</li>
              <li><strong>Edad:</strong> {mascotaGuardada.edad || '-'}</li>
              <li><strong>Teléfono de contacto:</strong> {mascotaGuardada.telefonoContacto || '-'}</li>
              <li><strong>Bozal:</strong> {mascotaGuardada.bozal ? 'Sí' : 'No'}</li>
              <li><strong>Puede consumir golosinas:</strong> {mascotaGuardada.puedeConsumirGolosinas ? 'Sí' : 'No'}</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default AltaMascota
