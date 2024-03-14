import express from "express";
import { userRouter } from "./user.router";
import path from 'path'
const port = 8080;
const app = express();

app.use(express.static(path.join(__dirname, '../')));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

app.use(userRouter);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
