require("dotenv").config();
import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import { marketApiRouter } from "./routes";

const app: Application = express();
app.use(cors());
app.use("/market-api", marketApiRouter);

const port: number = parseInt(process.env.PORT || "8080");

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
