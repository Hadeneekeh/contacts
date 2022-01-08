import "dotenv/config";
import express from "express";
import cors from "cors";

import { log } from "./utils/logger";
import { PORT } from "./utils/config";
import { logRequest, unknownEndpoint, errorHandler } from "./utils/middlewares";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logRequest);

app.get("/", (req, res) => {
  res.send("Hello, this is the contact list server!");
});

app.use(unknownEndpoint);
app.use(errorHandler);

app.listen(process.env.PORT, () =>
  log.info(`The app is listening on port ${PORT}}!`)
);
