import { NextFunction, Request, Response, Router } from "express";
import { app } from "./app";
import { KiteClient } from "./clients";
import { ACTIVE_USERS } from "./constants";
import { ActiveUsers, Calculator } from "./utils";

const kite = new KiteClient();
let history: unknown[] = [];
let intervalId: unknown;
export const marketApiRouter = Router();

const update = () => {
  const calc = new Calculator(kite);
  console.log("fetching...", new Date());

  calc.getData().then((res) => {
    console.log("history set", new Date());

    history = res;
  });
};

marketApiRouter.get("/init", (_req: Request, res: Response) => {
  res.redirect(kite.getLoginUrl());
});

marketApiRouter.get(
  "/kite-callback",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const requestToken = req.query.request_token as string;
      const { response } = await kite.generateSession(requestToken);
      update();
      intervalId = setInterval(update, 70000) as unknown as number;

      res.send(`Welcome ${response.user_name}`);
    } catch (error) {
      next(error);
    }
  }
);

marketApiRouter.get("/data", async (_req: Request, res: Response) => {
  res.json(history);
});

marketApiRouter.post("/data", async (req: Request, res: Response) => {
  (app.get(ACTIVE_USERS) as ActiveUsers).add(req.body["fcm-token"]);
  res.json(history);
});

marketApiRouter.get("/clear", (_req: Request, res: Response) => {
  clearInterval(intervalId as NodeJS.Timeout);
  res.send(intervalId + "stopped");
});

marketApiRouter.use((err: Error, _req: Request, res: Response) => {
  const message = JSON.stringify(err);
  console.trace(err);
  res.status(500);
  res.send(message);
});
