import { pool } from '../db.js';

export const getUsuarios = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT id_usu,rol_usu,nom_usu,nomcompleto_usu FROM usuario");
    res.json({ users: rows});
  } catch (error) {
    return res.status(400).json({ error: "Error al obtener usuarios" })
  }
};

export const agregarUsuario = async (req, res) => {
  try {
    const body = req.body;
    const response = await pool.query("INSERT INTO usuario set ?", [body]);
    const [rows] = await pool.query("SELECT * FROM usuario WHERE id_usu = ?", [response[0].insertId]);
    delete rows[0].contrasenia_usu;
    res.json({ usuario: rows[0] });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Error en agregar usuario" })
  }
};