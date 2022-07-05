import { Pool } from "pg";

let conn

if (!conn) {
  conn = new Pool({
    user: 'username',
    password: '1234',
    host: '0.0.0.0',
    port: '5432',
    database: 'postgres',
  })
}

export default conn;