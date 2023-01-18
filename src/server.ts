import express, { NextFunction, Request, Response } from "express";
import "dotenv/config";
import "express-async-errors";
import { routes } from "./routes";
import { AppError } from "./errors/AppError";

const app = express();

app.use(express.json());

app.use(routes);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return response.status(err.statusCode).json({
                message: err.message,
            });
        }

        console.log("\nInternal Server Error (500):", err);

        return response.status(500).json({
            status: "Error",
            message: `Internal Server Error (500) - ${err.message}`,
        });
    }
);

app.listen(3000, () =>
    console.log("\nHTTP Server is running on http://localhost:3000")
);
