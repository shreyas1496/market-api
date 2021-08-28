require("dotenv").config();
import "reflect-metadata";
import cors from "cors";
import express, { Application } from "express";
import { marketApiRouter } from "./api";

export const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/market-api", marketApiRouter);

const port: number = parseInt(process.env.PORT || "8080");

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
