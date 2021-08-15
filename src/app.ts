require("dotenv").config();
import express, { Application, Request, Response } from "express";
import fs from "fs";
import https from "https";

const app: Application = express();

const key = fs.readFileSync(__dirname + "/../../certs/selfsigned.key");
const cert = fs.readFileSync(__dirname + "/../../certs/selfsigned.crt");
const options = {
  key: key,
  cert: cert,
};

const port: number = parseInt(process.env.PORT || "8080");

app.get("/toto", (req: Request, res: Response) => {
  res.send("Hello toto");
});

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log("server starting on port : " + port);
});
