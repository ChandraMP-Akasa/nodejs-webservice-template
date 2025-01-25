import mysql from 'mysql2';

// Create a pool of database connections for better performance and reuse
const db = mysql.createPool({
  host: 'localhost',         // your database host
  user: 'root',              // your database username
  password: 'your_password', // your database password
  database: 'your_db_name',  // your database name
  waitForConnections: true,  // Wait for connections if pool is busy
  connectionLimit: 10,       // Max number of simultaneous connections
  queueLimit: 0              // Max number of queued connection requests
});

// Export the pool so it can be used across the application
export default db;
