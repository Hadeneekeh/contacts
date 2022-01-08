import "dotenv/config";

const PORT = process.env.PORT;
const dbUrl =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_DATABASE_URL
    : process.env.DATABASE_URL;

export { dbUrl, PORT };
