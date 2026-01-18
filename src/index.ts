import dotenv from "dotenv";
import app from "./app";

dotenv.config({
    path: "./.env",
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`PulseAPI app listen on port ${port}`);
});

