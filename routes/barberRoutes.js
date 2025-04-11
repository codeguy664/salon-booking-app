import express from 'express';
import { addBarber, getAllBarbers } from '../controllers/barberController.js';

const router = express.Router();

router.post('/', addBarber);
router.get('/', getAllBarbers);

export default router;
