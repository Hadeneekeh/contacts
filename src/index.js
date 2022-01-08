import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello, this the contact list server!');
});

app.listen(process.env.PORT, () =>
  console.log(`The app listening on port ${process.env.PORT}!`),
);