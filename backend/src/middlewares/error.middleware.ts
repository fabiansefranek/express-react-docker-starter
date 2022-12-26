import { Request, Response, NextFunction } from "express";
import HttpRequestError from "../errors/HttpRequestError";

const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.error(err.stack);
    res.status(err instanceof HttpRequestError ? err.status : 500).send({
        name: err.name,
        message: err.message,
    });
};

export default errorHandler;
