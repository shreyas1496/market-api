import { NextFunction, Request, Response, Router } from "express";
import Container from "typedi";
import { KiteClient } from "./clients";
import { ActiveUsers, Calculator } from "./utils";

export const marketApiRouter = Router();
const kite = Container.get(KiteClient);
const activeUsers = Container.get(ActiveUsers);
const calculator = Container.get(Calculator);

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

marketApiRouter.use((err: Error, _req: Request, res: Response) => {
  const message = JSON.stringify(err);
  console.trace(err);
  res.status(500);
  res.send(message);
});
