import { Router } from 'express';

const router = Router();

// Define routes for `/api1`
router.get('/', (req, res) => {
    res.send({ message: 'Welcome to Sampleroute 2!' });
});

router.get('/info', (req, res) => {
    res.send({ message: 'Sampleroute 2 - Info route' });
});

export default router;