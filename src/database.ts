import { Pool } from 'pg'

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'typescriptdatabase',
  password: 'your_password',
  port: 5432
})
