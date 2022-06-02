const express = require('express');
const app = express();
const PORT = 8189;

// Middleware untuk parsing JSON Body
app.use(express.json());

app.get('/', (request, response) => {
    response.json({message: "Index"}); 
});

app.get('/products', (request, response) => {
    response.json({message: "All Products"}); 
});

app.post("/products", (request, response) => {
    response.json({message: "POST Data"});
});

app.put("/products/:id", (request, response) => {
    response.json({message: "PUT Data", body: request.body});
});

app.delete("/products/:id", (request, response) => {
    response.json({message: "DELETE Data"});
});

app.listen(PORT, () => {
    console.info(`Server running at localhost:${PORT}`);
})
