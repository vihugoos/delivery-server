import express from "express";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () =>
    console.log("\nHTTP Server is running on http://localhost:3000")
);
