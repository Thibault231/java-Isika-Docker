import express from "express";
import { userRouter } from "./routes/user.router";

const app = express();
const port = 8080; // default port to listen

app.use(userRouter);

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
