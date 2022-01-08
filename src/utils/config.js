import "dotenv/config";

const PORT = process.env.PORT;
const db = process.env.DATABASE_URL;

export {
  db,
  PORT,
};
