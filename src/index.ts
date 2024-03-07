import express from "express";
import { userRouter } from "./routes/user.router";

const app = express();
const port = 8080; // default port to listen

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
