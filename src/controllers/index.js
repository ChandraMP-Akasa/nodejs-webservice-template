import { Router } from 'express';
import sampleroute1 from './sampleroute1.js'
import sampleroute2 from './sampleroute2.js';

const router = Router();

// Register route files with their prefixes
router.use('/sampleroute1', sampleroute1);
router.use('/sampleroute2', sampleroute2);

export default router;
