import { pool } from '../db.js';

export const login = async (req, res) => {
  try {
    const { rol_usu, nom_usu, contrasenia_usu } = req.body;
    const [rows] = await pool.query("SELECT * FROM usuario WHERE rol_usu = ? AND nom_usu = ? AND contrasenia_usu = ? ", [rol_usu, nom_usu, contrasenia_usu]);

    if (!rows[0]) {
      return res.status(400).json({
        message: "Datos incorrectos"
      });
    }
    delete rows[0].contrasenia_usu;
    res.json({ user: rows[0] });


  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Error en login" })
  }
};