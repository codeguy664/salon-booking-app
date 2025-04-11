import express from 'express';
import { createSalon, getAllSalons } from '../controllers/salonController.js';

const router = express.Router();

router.post('/', createSalon);
router.get('/', getAllSalons);

export default router;
