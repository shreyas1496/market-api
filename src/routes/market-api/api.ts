import { Application, NextFunction, Request, Response, Router } from "express";
import { Calculator } from "../../calculator";
import { KiteClient } from "../../clients";

const kite = new KiteClient();
let history: unknown[] = [];
export const marketApiRouter = Router();

marketApiRouter.get("/toto", (req: Request, res: Response) => {
  res.send("Hello toto");
});

marketApiRouter.get("/init", (req: Request, res: Response) => {
  res.redirect(kite.getLoginUrl());
});

marketApiRouter.get(
  "/kite-callback",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const requestToken = req.query.request_token as string;
      const { response } = await kite.generateSession(requestToken);
      res.redirect("/data");
    } catch (error) {
      next(error);
    }
  }
);

marketApiRouter.get(
  "/self",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await kite.getProfile().then((response) => res.send(response));
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

marketApiRouter.get("/exit", () => {
  process.exit(0);
});

marketApiRouter.use(
  (err: Error, req: Request, res: Response, next: NextFunction) => {
    const message = JSON.stringify(err);
    console.trace(err);
    res.status(500);
    res.send(message);
  }
);

setInterval(() => {
  const calc = new Calculator(kite);
  console.log("fetching...", new Date());

  calc.getData().then((res) => {
    console.log("history set", new Date());

    history = res;
  });
}, 90000);
