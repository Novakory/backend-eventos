import express from 'express';
import { getEventosDia, getEventosMes, agregarEvento,agregarEvento2 } from '../controllers/eventos.js';

const router = express.Router();

router.post("/dia", getEventosDia);
router.post("/mes", getEventosMes);
// router.post("/", agregarEvento);
router.post("/", agregarEvento2);
export default router;