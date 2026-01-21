import { config } from "dotenv";
import Knex from "knex";
config()

const knexConfig: Knex.Knex.Config = {
  client: 'pg',
  connection: {
    connectionString: process.env.DATABASE_URL,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    ssl: process.env.DB_SSL ? { rejectUnauthorized: false } : false,
  },
  migrations: {
    extension: 'ts',
    directory: './database/migrations'
  },
}

export default knexConfig