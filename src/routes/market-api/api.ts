import { Application, NextFunction, Request, Response, Router } from "express";
import { Calculator } from "../../calculator";
import { KiteClient } from "../../clients";

const kite = new KiteClient();
let history: unknown[] = [];
let intervalId: number;
export const marketApiRouter = Router();

const update = () => {
  const calc = new Calculator(kite);
  console.log("fetching...", new Date());

  calc.getData().then((res) => {
    console.log("history set", new Date());

    history = res;
  });
};

marketApiRouter.get("/init", (req: Request, res: Response) => {
  res.redirect(kite.getLoginUrl());
});

marketApiRouter.get(
  "/kite-callback",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const requestToken = req.query.request_token as string;
      const { response } = await kite.generateSession(requestToken);
      update();
      intervalId = setInterval(update, 90000) as unknown as number;

      res.send(`Welcome ${response.user_name}`);
    } catch (error) {
      next(error);
    }
  }
);

marketApiRouter.get(
  "/data",
  async (req: Request, res: Response, next: NextFunction) => {
    res.json(history);
  }
);

marketApiRouter.get("/clear", (req: Request, res: Response) => {
  clearInterval(intervalId);
  res.send(intervalId + "stopped");
});

marketApiRouter.use(
  (err: Error, req: Request, res: Response, next: NextFunction) => {
    const message = JSON.stringify(err);
    console.trace(err);
    res.status(500);
    res.send(message);
  }
);
