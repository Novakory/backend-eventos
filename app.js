import "dotenv/config";
import express from "express";
import historyApiFallback from "connect-history-api-fallback";
// import cors from 'cors';
// import cookieParser from 'cookie-parser';
import routesLogin from './routes/login.js';
import routesUsuario from './routes/usuario.js'
import routesEvento from './routes/eventos.js'
import routesSala from './routes/sala.js'

const app = express();

//SETTINGS
app.set("port", process.env.PORT || 3000);

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(cookieParser());
// const whiteList = ['http://127.0.0.1:5173'];
// app.use(cors({
//   origin: function (origin, callback) {
//     // if (whiteList.includes(origin)) {
//     console.log("Origen",origin)
//     if (!origin || whiteList.includes(origin)) {
//       console.log("Origin aceptado");
//       return callback(null, origin);
//     }
//     return callback(`Error en el cors origin: "${origin}" no autorizado`);
//   },
//   credentials: true//para que se puedan guardar las cookies en el navegador
// }));

//ROUTES
app.use('/login', routesLogin);
app.use('/usuario', routesUsuario);
app.use('/evento', routesEvento);
app.use('/sala',routesSala);

//PUBLIC
app.use(historyApiFallback());
app.use(express.static("public"));

//SERVER
app.listen(app.get("port"), () => {
  console.log("listening on port: http://localhost:" + app.get("port"));
});