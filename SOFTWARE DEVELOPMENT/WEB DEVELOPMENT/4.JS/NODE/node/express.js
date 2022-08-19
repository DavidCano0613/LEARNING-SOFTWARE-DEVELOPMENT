import express from "express";
import dotenv from 'dotenv';
import accountRouter from "../routes/account.js";
import authRouter from "../routes/auth.js";

dotenv.config();
process.env.PORT;

const PORT = 3001;
const expressApp = express();

expressApp.use(express.json());
expressApp.use(express.text());

//*ROUTERS
expressApp.use('/account',accountRouter);
expressApp.use('/auth',authRouter);
expressApp.use('/auth-session',authSessionRouter);
expressApp.use('/auth-token',authTokenRouter);


expressApp.listen(PORT,()=>{ 
  console.log("Esta escuchando en el puerto",PORT);
}) 


// expressApp.get('/mi-cuenta/:idCuenta/',(req,res)=>{
//   console.log(req.params.idCuenta)
//   console.log(req.headers)
//   // console.log(req.get("Melainvente"))
//   console.log(req.body)
//   res.send("Petición recibida esto se responde en el GET")
//   // res.status(401).send({
//   //   errorMessage:"No autorizado"
//   // })
// })
// expressApp.post("/mi-cuenta", (req, res) => {
//   res.send("Esta es la respuesta de este endpoint para POST");
// });
// expressApp.put("/mi-cuenta", (req, res) => {
//   res.send("Esta es la respuesta de este endpoint para PUT");
// });
// expressApp.all("/mi-cuenta", (req, res) => {
//   res.send("Esta es la respuesta de este endpoint para TODOS");
// });




