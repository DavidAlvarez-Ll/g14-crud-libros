const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getBooks = async () => {
  const res = await fetch(`${BASE_URL}/books`);
  if (!res.ok) throw new Error("Error al obtener libros");
  return res.json();
};

export const createBook = async (book) => {
  const res = await fetch(`${BASE_URL}/books`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  if (!res.ok) throw new Error("Error al crear libro");
  return res.json();
};

export const updateBook = async (id, book) => {
  const res = await fetch(`${BASE_URL}/books/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(book),
  });
  if (!res.ok) throw new Error("Error al actualizar libro");
  return res.json();
};

export const deleteBook = async (id) => {
  const res = await fetch(`${BASE_URL}/books/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Error al eliminar libro");
};