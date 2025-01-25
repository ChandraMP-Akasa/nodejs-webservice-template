import dotenv from 'dotenv';

dotenv.config();

const environment = process.env.NODE_ENV || 'local'; 

console.log("env - ", environment)

const config = {
  db: {
    host: process.env[`${environment.toUpperCase()}_DB_HOST`],
    user: process.env[`${environment.toUpperCase()}_DB_USER`],
    password: process.env[`${environment.toUpperCase()}_DB_PASSWORD`],
    database: process.env[`${environment.toUpperCase()}_DB_NAME`],
  },
  apiUrl: process.env[`${environment.toUpperCase()}_API_URL`],
  debug: process.env[`${environment.toUpperCase()}_DEBUG`] === 'true',
};

export default config;
