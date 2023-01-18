import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import { verify } from "jsonwebtoken";
import { auth } from "../config/auth";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticateDeliveryman(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing!", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub } = verify(
            token,
            auth.deliveryman_secret_token
        ) as IPayload;

        request.id_deliveryman = sub;

        return next();
    } catch (error) {
        throw new AppError("Invalid token!", 401);
    }
}
