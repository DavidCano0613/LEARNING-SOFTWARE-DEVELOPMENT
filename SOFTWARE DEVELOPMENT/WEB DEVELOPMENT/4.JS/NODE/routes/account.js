import { Router } from "express";
import userModel from "../schemas/user-schema.js";

const accountRouter = Router();

//Middleware que loguea la ip
accountRouter.use((req, res, next) => {
  console.log(req.ip);
  next();
});

//Obtener los detalles de una cuenta a partir del guid
accountRouter.get("/:guid", async (req, res) => {
  const { guid } = req.params;
  console.log(req.params)
  const user = await userModel.findById(guid).exec();
  if (!user) return res.status(404).send();
  return res.send(user);
});

//Crear una nueva cuenta a partir de guid y name 
accountRouter.post("/", async (req, res) => {
  const { guid, name } = req.body;
  if (!guid || !name) return res.state(400).send();
  
  const user = await userModel.findById(guid).exec();
  if(user) return res.status(409).send("El usuario ya se encuentra registrado");

  const newUser = new userModel({_id:guid,name})

  await newUser.save();
  
  return res.send("Usuario registrado")

});

//Actualizar el nombre de una cuenta
accountRouter.patch("/:guid",async (req, res) => {
  const { guid } = req.params;
  const { name } = req.body;
  if (!name) return res.state(400).send();
  const user = await userModel.findById(guid).exec();
  if (!user) res.status(404).send();

  user.name = name;
  await user.save();
  return res.send("Usuario actualizado");
});

//* Eliminar una cuenta
accountRouter.delete("/:guid", async (req, res) => {
  const { guid } = req.params;
  const user = await userModel.findById(guid).exec();
  if (!user) return res.status(404).send();
  await user.remove()
  return res.send("");
});

export default accountRouter;