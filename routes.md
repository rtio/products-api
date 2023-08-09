You can test the API using the following cURL commands:

1. **GET all products:**

   ```bash
   curl -X GET http://localhost:3000/products
   ```

2. **GET a specific product by ID (e.g., ID 1):**

   ```bash
   curl -X GET http://localhost:3000/products/1
   ```

3. **POST (create) a new product:**

   ```bash
   curl -X POST -H "Content-Type: application/json" -d '{"name": "New Product", "color": "Azul", "amount": 10, "price": 499}' http://localhost:3000/products
   ```

4. **DELETE a product by ID (e.g., ID 1):**

   ```bash
   curl -X DELETE http://localhost:3000/products/1
   ```

5. **PUT (replace) a product by ID (e.g., ID 2):**

   ```bash
   curl -X PUT -H "Content-Type: application/json" -d '{"id": 2, "name": "Updated Product", "color": "Verde", "amount": 5, "price": 699}' http://localhost:3000/products/2
   ```

6. **PATCH (update) a product by ID (e.g., ID 3):**

   ```bash
   curl -X PATCH -H "Content-Type: application/json" -d '{"price": 150}' http://localhost:3000/products/3
   ```

These commands assume that the server is running on `localhost` at port `3000`. Make sure to update the URLs and JSON data as needed for your specific use case.