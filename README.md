# Products API

API REST desarrollada con Node.js, Express y Firebase Firestore.
Incluye autenticación con JWT y autorización por roles.

## Tecnologías
- Node.js
- Express
- Firebase (Auth + Firestore)
- JWT
- dotenv

Las rutas protegidas requieren token JWT enviado por header:

Authorization: Bearer <token>

##  Endpoints

### Auth
- POST /auth/register
- POST /auth/login

### Products
- GET /api/products
- GET /api/products/:id
- POST /api/products (admin)
- DELETE /api/products/:id (admin)

## Para instalar

```bash
npm install
npm start
