import dotenv from 'dotenv';
dotenv.config();

const config = {
  PORT: process.env.PORT ?? 4000,
  DB_URI: process.env.DB_URI ?? 'postgres://postgres:password@localhost:5432/homeroom',
  JWT_SECRET: process.env.JWT_SECRET ?? '81d096cbd1b1a7bd1348cf004914963381139dc9473f2deaee94a67b2ba8454a899b571cc0674fc9f3ffea7a8cba68dde2aaccdaff63fcd8ac225b30165f8632' // 
};

export default config;
