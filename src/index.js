import * as dotenv from 'dotenv'
dotenv.config()

import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectDb } from "./database.js";

import path, { dirname } from "path";
import { fileURLToPath } from "url";

//Rutas

import postRoutes from "./routes/post.route.js";

connectDb();

const __filename = fileURLToPath(
    import.meta.url);

const __dirname = dirname(__filename);

const app = express();

app.set("port", process.env.PORT);
app.use("/public", express.static(__dirname + "/storage/imgs"));
app.use(morgan("dev"));
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/post", postRoutes);

app.listen(app.get("port"), () => {
    console.log("test\n port:", app.get("port"));
});