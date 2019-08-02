const express = require('express');
const productsRouter = require('./routes/products.ts');
const categoriesRouter = require('./routes/categories.ts');
const errors = require('./middleware/errors.ts');
const config = require('./utils/config.ts');


const app = express();
const port = config.appConfig('PORT', 3000);
app.set('port', port);
app.use("/data", express.static(__dirname + "/data"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/products", productsRouter);
app.use("/categories", categoriesRouter);

app.get('/', (req, res) => {
    res.send("hello world!!!");
});

app.use(errors.errorHandler);



app.listen(3000, () => console.log("listeninig on port 3000"));