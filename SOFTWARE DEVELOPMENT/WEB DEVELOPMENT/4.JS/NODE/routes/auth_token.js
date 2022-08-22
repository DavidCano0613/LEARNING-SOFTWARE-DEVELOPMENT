import {Router} from 'express'
import authByEmailPassword from "../node/helpers/check-email-password.js";

const authTokenRouter = Router();

authTokenRouter.post("login",(req,res)=>{
    const {email,password} = req.body
    if(!email || !password) return res.sendStatus(400);
    try{
       const user = authByEmailPassword(email,password)
       return res.send(`Usuario autenticado ${user.name}`)
    } catch(error) {
        return res.sendStatus(401);
    }
});

export default authTokenRouter;