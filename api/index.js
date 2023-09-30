const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./data/Products")
dotenv.config();
const PORT = process.env.PORT;

const mongoose = require("mongoose")
//connect db
mongoose.connect(process.env.MONGOOSEDB_RUL).then(()=>console.log("db connected")).then((err)=>{
    err;
})

const databaseSeeder = require('./databaseSeeder')
//database seeder routes
app.use('/api/seed',databaseSeeder )
app.listen(PORT || 9000, () => {
  console.log(`server listening on port ${PORT}`);
});



//usaikodev
//qJFgIlDe06anPajq
//mongodb+srv://usaikodev:qJFgIlDe06anPajq@cluster0.ywfntef.mongodb.net/REACT-NODE-APP


//api product test route
// app.get("/api/products", (req, res) => {
//   res.json(products);
// });
// app.get("/api/products/:id", (req, res) => {
//     const product = products.find((product)=>product.id === req.params.id)
//     res.json(product);
//   });
