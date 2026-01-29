// src/database/knex.ts
import knex, { Knex } from 'knex'
import 'dotenv/config'
import knexConfig from '../../knexfile'

const knexInstance = knex(knexConfig as Knex.Config)

export default knexInstance