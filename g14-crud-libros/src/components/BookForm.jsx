import { useState, useEffect } from "react";

const emptyForm = { titulo: "", autor: "", genero: "", anio: "" };

function BookForm({ onSubmit, editingBook, onCancel }) {
  const [form, setForm] = useState(emptyForm);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setForm(editingBook || emptyForm);
  }, [editingBook]);

  const validate = () => {
    const e = {};
    if (!form.titulo.trim()) e.titulo = "El título es obligatorio";
    if (!form.autor.trim()) e.autor = "El autor es obligatorio";
    return e;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const e2 = validate();
    if (Object.keys(e2).length > 0) return setErrors(e2);
    onSubmit(form);
    setForm(emptyForm);
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <h2>{editingBook ? "Editar libro" : "Agregar libro"}</h2>
      <div className="form-group">
        <label>Título *</label>
        <input name="titulo" value={form.titulo} onChange={handleChange} placeholder="Ej: Cien años de soledad" />
        {errors.titulo && <span className="error">{errors.titulo}</span>}
      </div>
      <div className="form-group">
        <label>Autor *</label>
        <input name="autor" value={form.autor} onChange={handleChange} placeholder="Ej: Gabriel García Márquez" />
        {errors.autor && <span className="error">{errors.autor}</span>}
      </div>
      <div className="form-group">
        <label>Género</label>
        <select name="genero" value={form.genero} onChange={handleChange}>
          <option value="">Seleccionar...</option>
          <option>Ficción</option>
          <option>No ficción</option>
          <option>Ciencia ficción</option>
          <option>Terror</option>
          <option>Romance</option>
          <option>Historia</option>
        </select>
      </div>
      <div className="form-group">
        <label>Año de publicación</label>
        <input name="anio" type="number" value={form.anio} onChange={handleChange} placeholder="Ej: 1967" />
      </div>
      <div className="form-actions">
        <button type="submit" className="btn-primary">
          {editingBook ? "Guardar cambios" : "Agregar libro"}
        </button>
        {editingBook && (
          <button type="button" className="btn-secondary" onClick={onCancel}>
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
}

export default BookForm;