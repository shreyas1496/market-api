require("dotenv").config();
import cors from "cors";
import EventEmitter from "events";
import express, { Application } from "express";
import { marketApiRouter } from "./api";
import {
  ACTIVE_USERS,
  ACTIVE_USER_CLEANUP_EVENT,
  EVENT_EMITTER,
} from "./constants";
import { ActiveUsers } from "./utils";

export const app: Application = express();
const emitter = new EventEmitter();
const activeUsers = new ActiveUsers(emitter);

app.set(ACTIVE_USERS, activeUsers);
app.set(EVENT_EMITTER, emitter);

setInterval(() => {
  emitter.emit(ACTIVE_USER_CLEANUP_EVENT);
}, 60 * 60 * 1000);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/market-api", marketApiRouter);

const port: number = parseInt(process.env.PORT || "8080");

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`);
});
