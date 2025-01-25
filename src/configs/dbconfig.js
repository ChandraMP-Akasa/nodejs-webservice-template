import mysql from 'mysql2';
import config from './envconfig.js'; // Import your dynamic env configuration

// Create a pool of database connections based on the current environment
const db = mysql.createPool({
  host: config.db.host,         
  user: config.db.user,         
  password: config.db.password, 
  database: config.db.database,
  waitForConnections: true,     
  connectionLimit: 10,          
  queueLimit: 0                
});

export default db;
