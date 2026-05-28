import { useState, useEffect } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import { getBooks, createBook, updateBook, deleteBook } from "./services/api";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingBook, setEditingBook] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const data = await getBooks();
      setBooks(data);
    } catch {
      setError("No se pudo conectar con la API.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (formData) => {
    try {
      if (editingBook) {
        const updated = await updateBook(editingBook.id, formData);
        setBooks(books.map((b) => (b.id === updated.id ? updated : b)));
        setEditingBook(null);
      } else {
        const created = await createBook(formData);
        setBooks([...books, created]);
      }
    } catch {
      setError("Ocurrió un error. Intenta de nuevo.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteBook(id);
      setBooks(books.filter((b) => b.id !== id));
    } catch {
      setError("No se pudo eliminar el libro.");
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📚 Biblioteca CRUD</h1>
        <p>Gestión de libros — G14</p>
      </header>
      <main className="app-main">
        {error && <div className="error-banner">{error} <button onClick={() => setError("")}>✕</button></div>}
        <section className="form-section">
          <BookForm onSubmit={handleSubmit} editingBook={editingBook} onCancel={() => setEditingBook(null)} />
        </section>
        <section className="list-section">
          <div className="list-header">
            <h2>Libros registrados</h2>
            <span className="count">{books.length} libro{books.length !== 1 ? "s" : ""}</span>
          </div>
          <BookList books={books} onEdit={setEditingBook} onDelete={handleDelete} loading={loading} />
        </section>
      </main>
    </div>
  );
}

export default App;