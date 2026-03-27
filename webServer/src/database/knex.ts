import knex from 'knex'
import 'dotenv/config'
import knexConfig from '../../knexfile.js'

const knexInstance = knex(knexConfig as knex.Knex.Config)

export default knexInstance