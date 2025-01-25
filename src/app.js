import express, { json, urlencoded } from 'express';
import routes from './controllers/index.js'
import configureSecurity from './configs/securityconfig.js';


const app = express();

//config security
configureSecurity(app)

// Middleware (e.g., for parsing JSON and URL-encoded data)
app.use(json());
app.use(urlencoded({ extended: true }));

// Use routes
app.use('/api', routes); 

// Export the app instance
export default app;
