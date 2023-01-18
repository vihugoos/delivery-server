import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.use(
    (err: Error, request: Request, response: Response, next: NextFunction) => {
        if (err instanceof Error) {
            return response.status(400).json({
                message: err.message,
            });
        }

        console.log("\nInternal Server Error (500):", err);

        return response.status(500).json({
            status: "Error",
            message: `Internal Server Error (500) - ${err}`,
        });
    }
);

app.listen(3000, () =>
    console.log("\nHTTP Server is running on http://localhost:3000")
);
