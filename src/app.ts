import express from "express";
import type { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env",
});

const app: Express = express();
const port = process.env.PORT || 3000;

//import routes
import healthCheckRouter from "./routes/healthcheck.routes";

app.use("/healthcheck", healthCheckRouter);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Express + TypeScript Server!");
    console.log("Hello from pulse-api");
});

export default app;
