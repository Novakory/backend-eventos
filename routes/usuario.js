import express from 'express';
import { getUsuarios, agregarUsuario } from '../controllers/usuario.js';

const router = express.Router();

router.get("/", getUsuarios);
router.post("/", agregarUsuario);
export default router;