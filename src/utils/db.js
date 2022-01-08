import mongoose from "mongoose";
import { dbUrl } from "./config";
import { log } from "./logger";

export const connect = () => {
  log.info("connecting to the db");
  
  return mongoose
    .connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then((result) => {
      log.info("connection successful");
    })
    .catch((error) => {
      log.error("connection failed:", error.message);
    });
};
