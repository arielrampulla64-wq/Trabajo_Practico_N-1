import { useState } from 'react'

function CambiarPassword() {
  const [form, setForm] = useState({
    passwordActual: '',
    passwordNueva: '',
    passwordConfirmar: '',
  })

  const [mensaje, setMensaje] = useState(null) // { tipo: 'exito' | 'error', texto: string }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (
      !form.passwordActual ||
      !form.passwordNueva ||
      !form.passwordConfirmar
    ) {
      setMensaje({ tipo: 'error', texto: 'Completá todos los campos.' })
      return
    }

    if (form.passwordNueva.length < 6) {
      setMensaje({
        tipo: 'error',
        texto: 'La nueva contraseña debe tener al menos 6 caracteres.',
      })
      return
    }

    if (form.passwordNueva !== form.passwordConfirmar) {
      setMensaje({
        tipo: 'error',
        texto: 'La nueva contraseña y su confirmación no coinciden.',
      })
      return
    }

    setMensaje({ tipo: 'exito', texto: 'Contraseña actualizada correctamente.' })
    setForm({ passwordActual: '', passwordNueva: '', passwordConfirmar: '' })
  }

  return (
    <div className="card tp-card p-4">
      <h3 className="mb-3">Ejercicio 1 — Cambiar contraseña</h3>

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label htmlFor="passwordActual" className="form-label">
            Contraseña actual
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordActual"
            name="passwordActual"
            value={form.passwordActual}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="passwordNueva" className="form-label">
            Nueva contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordNueva"
            name="passwordNueva"
            value={form.passwordNueva}
            onChange={handleChange}
          />
          <div className="form-text">Mínimo 6 caracteres.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="passwordConfirmar" className="form-label">
            Confirmar nueva contraseña
          </label>
          <input
            type="password"
            className="form-control"
            id="passwordConfirmar"
            name="passwordConfirmar"
            value={form.passwordConfirmar}
            onChange={handleChange}
          />
        </div>

        {/* Renderizado condicional del mensaje */}
        {mensaje && (
          <div
            className={`alert ${
              mensaje.tipo === 'exito' ? 'alert-success' : 'alert-danger'
            }`}
            role="alert"
          >
            {mensaje.texto}
          </div>
        )}

        <button type="submit" className="btn btn-primary">
          Guardar cambios
        </button>
      </form>
    </div>
  )
}

export default CambiarPassword
