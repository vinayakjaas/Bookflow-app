import { createPool } from "mysql";

import { configDotenv } from "dotenv";
configDotenv({ path: "./.env" });

const pool = createPool({
  host: process.env.REACT_APP_DB_HOST,
  user: process.env.REACT_APP_DB_USER,
  password: process.env.REACT_APP_DB_PASSWORD,
  database: process.env.REACT_APP_DB_DATABASE
});

export default pool;