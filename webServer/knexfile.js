import dotenv from 'dotenv';
dotenv.config({quiet:true});

const knexConfig = {
    client: process.env.DATABASE_CLIENT,
    connection: {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        password: process.env.DB_PASSWORD,
        ssl: process.env.DB_SSL ? { rejectUnauthorized: false } : false,
    },
    migrations: {
        extension: 'cjs',
        directory: './src/database/migrations'
    },
    seeds: {
        extension: 'cjs',
        directory: './src/database/seeds'
    }
}

export default knexConfig