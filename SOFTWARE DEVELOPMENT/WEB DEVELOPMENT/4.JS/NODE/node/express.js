import express from "express";
import dotenv from 'dotenv';
import {USERS_BBDD} from './bdd.js'

dotenv.config();
process.env.PORT

const PORT = 3001;
const expressApp = express();

//*

expressApp.use(express.json())
expressApp.use(express.text())

expressApp.listen(PORT,()=>{ 
  console.log("Esta escuchando en el puerto",PORT);
}) 


//*ROUTERS

//Obtener una cuenta
//Crear una cuenta
//Actualizar una cuenta
//Eliminar una cuenta

expressApp.get('/account/:guid',(req,res)=>{
  const {guid} = req.params
  const user = USERS_BBDD.find(user => user.guid === guid)
  console.log(req.params.guid)
  if(!user) req.status(404).send()
  res.send(user)
});


expressApp.post('/account',(req,res)=>{

});
expressApp.patch('/account',(req,res)=>{

});
expressApp.delete('/account',(req,res)=>{

});


(()=>{
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
})




