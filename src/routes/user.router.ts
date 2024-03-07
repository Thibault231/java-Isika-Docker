import express, { Request, Response } from "express";

const userRouter = express.Router();

userRouter.use(express.json());

// ------------------------------GET
//Afficher le message du nom : http://localhost:8080/printUser/yoann
userRouter.get("/printUser/:name", async (req: Request, res: Response): Promise<JSON> => {
    const userName: string = req?.params?.name;
    let response: string = "Bonjour " + userName + " vous êtes bien matinal."
    return JSON.parse(response);
});

export { userRouter };
