import cors from 'cors';
import helmet from 'helmet';

const configureSecurity = (app) => {
    // Enable CORS with custom options
    const corsOptions = {
        origin: '*', // Allows all domains, but this can be restricted to specific domains for more security
        methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
        allowedHeaders: ['Content-Type', 'Authorization'] // Allow specific headers
    };
    app.use(cors(corsOptions));

    // Use Helmet to secure HTTP headers
    app.use(helmet());

};

export default configureSecurity;
