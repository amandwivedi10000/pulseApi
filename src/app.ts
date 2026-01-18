import express from "express";
import type { Express, Request, Response } from "express"
import dotenv from "dotenv"

dotenv.config({
    path: "./.env",
});

const app: Express = express()
const port = process.env.PORT || 3000

app.get("/", (req: Request, res: Response) => {
    res.send("Hello from Exress + TypeScript Server!")
    console.log("Hello from pulse-api")
})


export default app;
