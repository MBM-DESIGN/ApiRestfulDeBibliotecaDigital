🎯 API RESTful de Biblioteca Digital.
Creación de una API RESTful utilizando Node.js, Express, TypeScript, MongoDB y el patrón MVC, para gestionar una colección de libros a partir de las operaciones CRUD: Create, Read, Update and Delete.
📚 Modelo: Book →esquema de Book con los siguientes campos:
title: string (requerido y único).
author: string (requerido).
publishedYear: number (opcional).
genre: string (opcional).
available: boolean (por defecto en true).

🛠️ Requisitos Técnicos.
Lenguaje: TypeScript.


Framework: Express.


Base de datos: MongoDB.


Patrón de diseño: MVC (Modelo - Vista - Controlador).


Control de versiones: Git.

🔄 Endpoints requeridos.
Método
Ruta
Descripción
GET
/api/books
Listar todos los libros
GET
/api/books/:id
Obtener un libro por ID
POST
/api/books
Crear un nuevo libro
PATCH
/api/books/:id
Actualizar un libro existente
DELETE
/api/books/:id
Eliminar un libro


🧠 Consideraciones técnicas.
Estructura del proyecto:
src/
├── controllers/
├── models/
├── routes/
├── config/
├── utils/
├── interfaces/
├── index.ts

🧪Instrucciones para instalar dependencias y ejecutar la API.
Realizamos la configuración Inicial del Proyecto. !Importante: .gitignore

Primero, creamos la estructura de carpetas del proyecto y el archivo: package.json

npm init -y

Instalamos las dependencias necesarias.

npm install express mongoose
npm install -D typescript ts-node @types/express @types/node nodemon

Creamos el archivo tsconfig.json en la raíz del proyecto para la configuración de TypeScript.

Modificamos el package.json para incluir los scripts de inicio y desarrollo.

Creamos un archivo .env en la raíz del proyecto para la conexión a la base de datos y reemplazamos con la cadena de conexión de MongoDB.

Terminamos de completar cada archivo con su código correspondiente.

Estructura del Código

src/config/db.ts
Configuramos la conexión a MongoDB.

src/interfaces/bookInterface.ts 
Definimos la interfaz para el modelo de libro, lo que garantiza el tipado fuerte.

src/models/bookModel.ts
Definimos el esquema de Mongoose para el modelo Book.

src/controllers/bookController.ts
Definimos la lógica de negocio para cada endpoint.

src/routes/bookRouter.ts
Definimos las rutas y las asociamos con los controladores.

src/utils/errorHandler.ts
Este archivo contiene un middleware o funciones para un manejo de errores centralizado.

src/index.ts
Este es el archivo principal de la aplicación.

Ejecutamos la API.

Con MongoDB en ejecución en la máquina, insertamos el comando

npm run dev

Esto iniciará el servidor utilizando nodemon para reiniciarlo automáticamente con los cambios. 
Deberíamos ver un mensaje como: MongoDB conectado exitosamente y Servidor escuchando en http://localhost:3000.

Probamos los Endpoints con una herramienta como Postman.

Una vez que el servidor esté corriendo, utilizamos Postman para interactuar con la API.
POST /books (Crear un nuevo libro).
{
  "title": "El Señor de los Anillos",
  "author": "J.R.R. Tolkien",
  "publishedYear": 1954,
  "genre": "Fantasía"
}
GET /books (Listar todos los libros).
GET /books/:id (Obtener un libro por ID).
Reemplazamos :id con el _id de un libro que hayamos creado.
PATCH /books/:id (Actualizar un libro existente).
DELETE /books/:id (Eliminar un libro)
Reemplazamos :id con el _id del libro a eliminar.

🎯 Autora: MBM-DESIGN.
