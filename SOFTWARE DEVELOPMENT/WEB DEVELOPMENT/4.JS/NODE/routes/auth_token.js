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




//* Para authsesion: Para cerrar sesion lo ideal es que en el servidor se elimine esa sesion tambien por lo cual se puede crear otro endpoit que reicba el mismo sesion id y lo elimine del array o la base de datos, y luego setear la cokie del navegadro a vacio o poner fecha de caducida de un segundo asi nos aseguramos que la sesion id no tenga relavancia ni el en el cliente ni el servidor

//* El token es bastante particular ya que debe cumplir con 3 requisitos minimamente.

// 1. Debe permitir meter dentro información, en este se va meter el id del usuaario de tal manera que el token sabe a que usuario  pertenece y a quien autentica.

// 2 Se debe poder definir la duración de ese token, pasado ese tiempo ese token deja de ser valido.

// 3 Debe poder ser verificable, esto implica dos cosas, que no se pueda alterar y si se altera deje de ser valido  y que podamos ser capaces de verificar que fuimos nosotros los que los generamos. En ese sentido los tokens tienen una firma y cuando estos llegan al servidor nosotros comprobamos si nosotros hicimos esa firma.

// El jwt esta compuesto por tres partes. la uno es la cabecera indica el algoritmo y el tipo de token que vamos a genera, esta en base 64. Dentro de los tokens de tipo json hay algunos más seria buena idea saber cuales son. Luego sigue la información que se ha introducido en el token habitualmente el id del usuario la fecha en la que fue creado el token y la caducidad, no es ideal poner información sensible aqui, es muy importante saber usarlos. La tercera parte es una firma que es una clave secreta si se altera el contenido la clave no coincidira, es un hash. El token cualquier persona lo puede leer porque es base 64 entonces de puede decodificar. Por lo tanto no guardar información personal del usuario en los tokens. Hay otros que van cifrados, es algo más avanzado. JOSE es una libreria
