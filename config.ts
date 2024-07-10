import dotenv from 'dotenv';
dotenv.config();

const config = {
  PORT: process.env.PORT ?? 4000,
  DB_URI: process.env.DB_URI ?? 'postgres://postgres:password@localhost:5432/homeroom'
};

export default config;