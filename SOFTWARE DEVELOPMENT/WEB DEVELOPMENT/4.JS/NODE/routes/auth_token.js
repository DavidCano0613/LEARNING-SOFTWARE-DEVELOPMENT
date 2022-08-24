import { Router } from "express";
import authByEmailPassword from '../node/helpers/check-email-password.js';
import { nanoid } from "nanoid";
import { USERS_BBDD } from '../node/bdd.js';
import { SignJWT, jwtVerify } from 'jose';

const authTokenRouter = Router();

authTokenRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.sendStatus(400);
  try {
    const { guid } = authByEmailPassword(email, password);
    //Generar el token y devolverlo 
    const jwtConstructor = new SignJWT({ guid });
    const encoder = new TextEncoder();
    const jwt = await jwtConstructor
      .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
      .setIssuedAt()
      .setExpirationTime('1h')
      .sign(encoder.encode(process.env.JWT_PRIVATE_KEY));
    //el jwt puede ir en cookie
    return res.send({ jwt });
  } catch (error) {
    return res.sendStatus(401);
  }
});

authTokenRouter.get("/profile", async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401);

  try {
    const encoder = new TextEncoder();
    const jwtData = await jwtVerify(
      authorization,
      encoder.encode(process.env.JWT_PRIVATE_KEY)
    );

    const user = USERS_BBDD.find((user) => user.guid === jwtData.payload.guid);
    console.log(user);
    if (!user) return res.sendStatus(401);

    delete user.password;

    return res.send(user);
  } catch (error) {
    return res.sendStatus(401);
  }


});

export default authTokenRouter;


