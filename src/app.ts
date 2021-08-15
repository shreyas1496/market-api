require("dotenv").config();
import express, { Application, NextFunction, Request, Response } from "express";
import fs from "fs";
import https from "https";
import { Calculator } from "./calculator";
import { KiteClient } from "./clients";

const app: Application = express();

const key = fs.readFileSync(__dirname + "/../../certs/selfsigned.key");
const cert = fs.readFileSync(__dirname + "/../../certs/selfsigned.crt");
const options = {
  key: key,
  cert: cert,
};

const port: number = parseInt(process.env.PORT || "8080");
const kite = new KiteClient();

app.get("/toto", (req: Request, res: Response) => {
  res.send("Hello toto");
});

app.get("/init", (req: Request, res: Response) => {
  res.redirect(kite.getLoginUrl());
});

app.get(
  "/kite-callback",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const requestToken = req.query.request_token as string;
      const { response } = await kite.generateSession(requestToken);
      console.log(response);

      res.send(`Hello ${response}`);
    } catch (error) {
      next(error);
    }
  }
);

app.get("/self", async (req: Request, res: Response, next: NextFunction) => {
  try {
    await kite.getProfile().then((response) => res.send(response));
  } catch (error) {
    next(error);
  }
});

app.get("/data", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const calc = new Calculator(kite);

    res.json(await calc.getData());
  } catch (error) {
    next(error);
  }
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // Simple error handling here... in real life we might
  // want to be more specific
  const message = JSON.stringify(err);
  console.error(`I'm the error handler ${message}`);
  res.status(500);
  res.send(message);
});

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log("server starting on port : " + port);
});
