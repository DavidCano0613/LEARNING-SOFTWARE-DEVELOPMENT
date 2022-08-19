import {Router} from 'express'
import authByEmailPassword from '../node/helpers/check-email-password';
import {nanoid} from 'nanoid'

const sessions = [];
const authSessionRouter = Router();

authSessionRouter.post("login",(req,res)=>{
    const {email,password} = req.body
    if(!email || !password) return res.sendStatus(400);
    try{
       authByEmailPassword(email,password);
       const sessionId = nanoid();
       sessions.push({sessionId});

       res.cookie('sesionId',sessionId,{
        httpOnly:true,
       })
       return res.send()
    } catch(error) {
        return res.sendStatus(401);
    }
});

authSessionRouter.get('/profile',(req,res)=>{
    req.cookies;
})

export default authSessionRouter;