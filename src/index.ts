import express from "express";
import dotenv from "dotenv";
import { createClient } from "redis";
import { Client } from "pg";

//Redis Connection Start
const client = createClient({
  url: process.env.REDIS_URL,
  password: process.env.REDIS_PASSWORD,
});

client.connect();
//Redis Connection End

//Postgres Connection Start

const postgresClient = new Client({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: 5432,
});

postgresClient.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

//Postgres Connection End

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  if (process.env.NODE_ENV !== "production") {
    console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
  }
});
