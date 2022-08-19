import{ Router } from 'express';
import authByEmailPassword from '../node/helpers/check-email-password.js'
const authRouter = Router();


//* No es necesaria autenticación ni autorización  
authRouter.get('/publico',(req,res)=> res.send("Endpoint público cualquiera puede acceder"))

authRouter.post('/autenticado',(req,res)=>{
    const {email, password} = req.body;
    if(!email || !password) return res.sendStatus(400)
    try{
        const user = authByEmailPassword(email,password)
        res.send(`Usuario ${user.name} autenticado`);
    }
    catch(error){
        return res.sendStatus(401)
    }
});

authRouter.post("/autorizado",(req,res)=>{
    const {email, password} = req.body;
    if(!email || !password) return res.sendStatus(400)
    try{
        const user = authByEmailPassword(email,password)
        res.send(`Usuario administrador ${user.name} autenticado`);
        if(user.role !== 'admin') return res.sendStatus(403);
    } catch(error){
    }
});

export default authRouter 
