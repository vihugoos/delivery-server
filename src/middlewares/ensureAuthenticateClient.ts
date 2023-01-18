import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";
import { verify } from "jsonwebtoken";
import { auth } from "../config/auth";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticateClient(
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
        const { sub } = verify(token, auth.client_secret_token) as IPayload;

        request.id_client = sub;

        return next();
    } catch (error) {
        throw new AppError("Invalid token!", 401);
    }
}
