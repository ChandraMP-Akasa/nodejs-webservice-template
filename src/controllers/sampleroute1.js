import { Router } from 'express';

const router = Router();

// Define routes for `/sampleroute1`
router.get('/', (req, res) => {
    res.send({ message: 'Welcome to Sampleroute 1!' });
});

router.get('/info', (req, res) => {
    res.send({ message: 'Sampleroute 1 - Info route' });
});

export default router;