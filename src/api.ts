import { NextFunction, Request, Response, Router } from "express";
import Container from "typedi";
import { KiteClient } from "./clients";
import { FCMService } from "./services";
import { MessageType } from "./types";
import { ActiveUsers, Calculator } from "./utils";

export const marketApiRouter = Router();
const kite = Container.get(KiteClient);
const activeUsers = Container.get(ActiveUsers);
const calculator = Container.get(Calculator);
const fcm = Container.get(FCMService);

marketApiRouter.get("/init", (_req: Request, res: Response) => {
  res.redirect(kite.getLoginUrl());
});

marketApiRouter.get(
  "/kite-callback",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const requestToken = req.query.request_token as string;
      calculator.startServer(requestToken);

      res.send(`Welcome `);
    } catch (error) {
      next(error);
    }
  }
);

marketApiRouter.get("/data", async (_req: Request, res: Response) => {
  res.json(calculator.data());
});

marketApiRouter.post("/data", async (req: Request, res: Response) => {
  activeUsers.add(req.body["fcm-token"]);
  res.json(calculator.data());
});

marketApiRouter.get("/active-users", (_req, res: Response) => {
  res.json(activeUsers.getActive());
});

marketApiRouter.get("/test", (_req, res: Response) => {
  fcm.send({
    type: MessageType.TEST,
    title: "Hello",
  });
  res.status(200).send();
});

marketApiRouter.get("/info", (_req, res: Response) => {
  res.json(calculator.rawData());
});

marketApiRouter.use((err: Error, _req: Request, res: Response) => {
  res.status(500);
  try {
    const message = JSON.stringify(err);
    console.trace(err);
    res.send(message);
  } catch {
    res.send("Unprocessable error");
  }
});
