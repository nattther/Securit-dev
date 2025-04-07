const express = require('express');
const app = express();
const useRouter = require("./route/user.route.js")
const authRouter = require("./route/auth.route.js")
const productRouter = require("./route/product.route.js")

app.use(express.json());
app.use('/user', useRouter);
app.use('/auth', authRouter);
app.use('/product',productRouter)

module.exports = app;