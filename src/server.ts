import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.json({
        message: "Everything is ok!",
    });
});

app.listen(3000, () =>
    console.log("\nHTTP Server is running on http://localhost:3000")
);
