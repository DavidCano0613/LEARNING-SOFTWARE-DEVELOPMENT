import{ Router } from 'express';

import { USERS_BBDD } from '../../node/bdd'


const authRouter = Router();


authRouter.get('/publico',(req,res)=> res.send("Endpoint público"))

authRouter.post('autenticado',(req,res)=>{
    const {email,password} = req.body;


    if(!email || !password) return res.send(400)

    const user = USSERS_BBDD.filter(user => user.email === email)

    if(!user) return res.send(401);

    if(!user.password === password) return res.send(401);

    res.send(`Usuario ${user.name} autenticado`);

})

authRouter.post("autorizado",(req,res)=>{
    const {email,password} = req.body;

    if(!email || !password) return res.send(400)

    const user = USSERS_BBDD.filter(user => user.email === email)

    if(!user) return res.send(401);

    if(!user.password === password) return res.send(401);

    if(!user.role !== 'admin') return res.send(403);

    res.send(`Usuario administrador ${user.name} autenticado`);

})






export default authRouter 