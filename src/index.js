import express from "express";
import cors from "cors";

import { log } from "./utils/logger";
import { PORT } from "./utils/config";
import { logRequest, unknownEndpoint, errorHandler } from "./utils/middlewares";
import { connect } from "./utils/db";
import router from "./routes/contact";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logRequest);

app.get("/", (req, res) => {
  res.send("Hello, this is the contact list server!");
});

app.use('/api', router)

app.use(unknownEndpoint);
app.use(errorHandler);

const start = async () => {
  try {
    await connect();
    app.listen(PORT, () => log.info(`The app is listening on port ${PORT}!`));
  } catch (e) {
    log.error(e);
  }
};

start();
