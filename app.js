const express = require('express');
const app = express();
const useRouter = require("./route/user.route.js")
const authRouter = require("./route/auth.route.js")

app.use(express.json());
app.use('/user', useRouter);
app.use('/auth', authRouter);

module.exports = app;