import { pool } from '../db.js';

export const getSalas = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM sala");
    res.json({ salas: rows });
  } catch (error) {
    return res.status(400).json({ error: "Error al obtener usuarios" })
  }
};
