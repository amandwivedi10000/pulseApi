import express from "express";
import type { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env",
});

const app: Express = express();

//basic config
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//import routes
import healthCheckRouter from "./routes/healthcheck.routes";
import pulses from "./routes/pulse.routes";

app.use("/healthcheck", healthCheckRouter);
app.use("/pulses", pulses);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Express + TypeScript Server!");
    console.log("Hello from pulse-api");
});

export default app;
