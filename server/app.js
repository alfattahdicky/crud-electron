import express, { json, urlencoded } from "express";
import path from "path";
import cors from "cors";
import apiRouter from "./routes/route.js";

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

app.use(apiRouter);

app.listen(3000, () => {
  console.log('Server Run port :3000')
});
