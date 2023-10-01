import { json } from 'express';
import { pool } from '../db.js';

export const getEventosMes = async (req, res) => {
  try {
    const fecha = req.body.fecha_eve;
    const [rows] = await pool.query("SELECT * FROM evento2 WHERE MONTH(fecha_eve) = MONTH(?)",[fecha]);
    res.json({ eventos: rows });
  } catch (error) {
    return res.status(400).json({ error: "Error al obtener eventos mes" })
  }
};
export const getEventosDia = async (req, res) => {
  try {
    const fecha = req.body.fecha_eve;
    const [rows] = await pool.query("SELECT * FROM evento2 WHERE fecha_eve = ?",[fecha]);
    res.json({ eventos: rows });
  } catch (error) {
    return res.status(400).json({ error: "Error al obtener eventos dia" })
  }
};

export const agregarEvento = async (req, res) => {
  try {
    const body = req.body;
    const response = await pool.query("INSERT INTO evento set ?", [body]);
    const [rows] = await pool.query("SELECT * FROM evento WHERE id_eve = ?", [response[0].insertId]);
    res.json({ evento: rows[0] });
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Error en agregar evento" })
  }
};


export const agregarEvento2 = async (req, res) => {
  try {
    const body = req.body;
    console.log(body.horaini_eve);
    const [responseCount] = await pool.query("SELECT COUNT(*) as num_registros FROM evento2 WHERE fecha_eve=? AND (ADDTIME(?, '00:01:00') BETWEEN horaini_eve AND horafin_eve OR SUBTIME(?, '00:01:00') BETWEEN horaini_eve AND horafin_eve)", [body.fecha_eve, body.horaini_eve, body.horafin_eve]);
    console.log("responseCount:", responseCount[0].num_registros);
    if (responseCount[0].num_registros > 0) {
      return res.status(400).json({
        message: "Ya hay registros con la misma hora"
      });
    }
    const response = await pool.query("INSERT INTO evento2 set ? ", [body]);
    const [rows] = await pool.query("SELECT * FROM evento2 WHERE id_eve = ?", [response[0].insertId]);
    res.json({ evento: rows[0] });
    // res.json({ res: responseCount[0].num_registros })
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: "Error en agregar evento" })
  }
};
