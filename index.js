const express = require('express');
const app = express();
const PORT = 8189;
const db = require('./models/index.js');
const Product = db.product;

// Middleware untuk parsing JSON Body
app.use(express.json());

app.get('/', async(request, response) => {
    response.json({message: "Index"});
});

app.get('/products', async(request, response) => {
    const products = await Product.findAll();

    response.json({data: products}); 
});

app.get("/products/:id", async(request, response) => {
    const product = await Product.findByPk(request.params.id);

    if (product == null) {
        response.status(404).json({error: "Data not found"});
    } else {
        response.json({data: product});
    }
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
