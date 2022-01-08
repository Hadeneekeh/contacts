import { log } from "./logger";

const logRequest = (request, response, next) => {
  log.info("Method:", request.method);
  log.info("Path:  ", request.path);
  log.info("---");
  next();
};

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: "The endpoint does not exist!" });
};

const errorHandler = (error, request, response, next) => {
  log.error(error.message);

  if (error.name === "CastError") {
    return response.status(400).send({ error: "Malformatted id" });
  } else if (error.name === "ValidationError") {
    return response.status(400).json({ error: error.message });
  }

  next(error);
};

export {
  logRequest,
  unknownEndpoint,
  errorHandler,
};
