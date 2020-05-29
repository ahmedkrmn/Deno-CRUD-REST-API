## Simple CRUD REST API in Deno

A simple API written in the new JavaScript & TypeScript [Deno](https://deno.land/) runtime.

### Setup

1. Install Deno by following the instructions [here](https://github.com/denoland/deno_install).

2. Run:

   ```bash
   deno run --allow-net https://raw.githubusercontent.com/ahmedkrmn/Deno-CRUD-REST-API/master/server.ts
   ```

   

### API Routes
| Method   | URI                 | Action                           |
| -------- | ------------------- | -------------------------------- |
| `GET`    | `/api/products`     | Get all products                 |
| `GET`    | `/api/products/:id` | Get a product with a given id    |
| `POST`   | `/api/products`     | Add a new product                |
| `PUT`    | `/api/products/:id` | Update a product with a given id |
| `DELETE` | `/api/products/:id` | Delete a product with a given id |