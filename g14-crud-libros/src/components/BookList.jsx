function BookList({ books, onEdit, onDelete, loading }) {
  if (loading) return <p className="status-msg">Cargando libros...</p>;
  if (books.length === 0) return <p className="status-msg">No hay libros aún. ¡Agrega el primero!</p>;

  return (
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book-card">
          <div className="book-info">
            <h3>{book.titulo}</h3>
            <p>{book.autor}</p>
            <div className="book-meta">
              {book.genero && <span className="badge">{book.genero}</span>}
              {book.anio && <span className="year">{book.anio}</span>}
            </div>
          </div>
          <div className="book-actions">
            <button onClick={() => onEdit(book)} className="btn-edit">Editar</button>
            <button
              onClick={() => {
                if (window.confirm(`¿Eliminar "${book.titulo}"?`)) onDelete(book.id);
              }}
              className="btn-delete"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookList;