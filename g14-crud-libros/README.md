# 📚 Biblioteca CRUD - Gestión de Libros

Proyecto final del curso de Java G14. Aplicación web para gestionar libros mediante operaciones CRUD completas.

## 🔗 Demo en vivo

[https://g14-crud-libros-31em.vercel.app](https://g14-crud-libros-31em.vercel.app)

## 🛠️ Tecnologías utilizadas

- **React** — Biblioteca de JavaScript para interfaces de usuario
- **Vite** — Herramienta de construcción y desarrollo
- **MockAPI** — API REST simulada para el backend
- **Vercel** — Plataforma de deploy

## ✅ Funcionalidades

- **Crear** — Agregar nuevos libros con título, autor, género y año
- **Leer** — Listar todos los libros registrados
- **Actualizar** — Editar la información de un libro existente
- **Eliminar** — Borrar un libro con confirmación

## 📁 Estructura del proyecto
src/
├── components/
│   ├── BookForm.jsx      # Formulario para crear y editar libros
│   └── BookList.jsx      # Lista de libros con acciones
├── services/
│   └── api.js            # Conexión con la API (fetch)
├── App.jsx               # Componente principal
└── App.css               # Estilos globales

## 🚀 Cómo correr el proyecto localmente

1. Clonar el repositorio
```bash
git clone https://github.com/DavidAlvarez-Ll/g14-crud-libros.git
cd g14-crud-libros
```

2. Instalar dependencias
```bash
npm install
```

3. Crear archivo `.env.local` con la URL de la API
VITE_API_BASE_URL=https://6a18c9aa4325f9b0c1321fcb.mockapi.io

4. Correr el servidor de desarrollo
```bash
npm run dev
```

## 🌐 API

Se utilizó [MockAPI](https://mockapi.io) como backend simulado.

**Endpoint:** `https://6a18c9aa4325f9b0c1321fcb.mockapi.io/books`

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | /books | Obtener todos los libros |
| POST | /books | Crear un nuevo libro |
| PUT | /books/:id | Actualizar un libro |
| DELETE | /books/:id | Eliminar un libro |

## 👨‍💻 Autor

David Alvarez — G14