import express from 'express';
import { getSalas } from '../controllers/sala.js';

const router = express.Router();

router.get("/", getSalas);
export default router;