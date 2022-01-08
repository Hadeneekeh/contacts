import "dotenv/config";
import express from "express";
import cors from "cors";

import { log } from "./utils/logger";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, this the contact list server!");
});

app.listen(process.env.PORT, () =>
  log.info(`The app is listening on port ${process.env.PORT}!`)
);
