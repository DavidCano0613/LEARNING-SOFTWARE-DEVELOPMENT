import {createServer} from 'http';
// *Al llamar esta función se crea una instacia de tipo servidor. 

const httpServer = createServer((req,res)=>{

  console.log(req.method)
  console.log(req.url);
  console.log(req.headers)

  let data = "";
  let chunckIndex = 0;
  req.on('data',(chunk)=>{
    data += chunk
    chunckIndex++,
    console.log(chunckIndex)
  })

  req.on('end',()=>{
    // console.log(data)
  })

  res.end("Se ha recibido tu petición, mi labor es avisarte y ya")
})

httpServer.listen(3000,()=>{
  console.log(`Escuchando en el puerto 3000`)
})








 

