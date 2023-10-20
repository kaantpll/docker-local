import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  if (process.env.NODE_ENV !== "production") {
    /* eslint-disable no-console */
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  }
});
