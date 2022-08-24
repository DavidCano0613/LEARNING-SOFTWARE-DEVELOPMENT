import {Router} from 'express'
import authByEmailPassword from '../node/helpers/check-email-password.js';
import { nanoid } from 'nanoid';
import {USERS_BBDD} from '../node/bdd.js'
const sessions = [];
const authSessionRouter = Router();

authSessionRouter.post("/login", (req,res)=>{
    const {email,password} = req.body
    if(!email || !password) return res.sendStatus(400);
    try{
       const {guid} = authByEmailPassword(email,password);
       const sessionId = nanoid();
       sessions.push({ sessionId, guid });
       res.cookie('sessionId',sessionId,{
        httpOnly:true,
    });
    console.log(sessions)
    return res.send();
    } catch(error) {
        return res.sendStatus(401);
    }
});


authSessionRouter.get('/profile',(req,res)=>{
    const {cookies} = req;
    console.log(cookies);
    
    if(!cookies.sessionId) return res.sendStatus(401);

    const userSession = sessions.find(session => session.sessionId === cookies.sessionId)
    console.log(userSession);

    if(!userSession) return res.sendStatus(401);
    
    const user = USERS_BBDD.find(user => user.guid === userSession.guid); 
    console.log(user);

    if(!user) return res.sendStatus(401);
    
    delete user.password;
    
    return res.send(user)
    res.send()
})

export default authSessionRouter;


