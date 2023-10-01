import {createPool} from 'mysql2/promise';

export const pool = createPool({
  user: 'root',
  password: process.env.PASSWORD,
  host: 'localhost',
  port: 3306,
  database: process.env.DATABASE
});