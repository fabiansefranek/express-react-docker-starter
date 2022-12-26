import { NextFunction } from "connect";
import express, { Request, Response } from "express";
import ApplicationError from "../errors/ApplicationError";
import HttpRequestError from "../errors/HttpRequestError";

const router = express.Router();

router.get("/hello", (req: Request, res: Response) => {
    res.json({ message: "Hello World!" });
});

router.get("/error", (req: Request, res: Response) => {
    throw new ApplicationError("Error from /sample/error");
});

router.get(
    "/async-error",
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            throw new HttpRequestError(400, "Error from /sample/async-error");
        } catch (err) {
            next(err);
        }
    }
);

export default router;
