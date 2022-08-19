import {createServer} from 'http';


// *Creación de un servidor con la libreria nativa de NodeJS. 

const httpServer = createServer((req,res)=>{
  console.log(req)
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
    console.log(data)
  })

  res.end("Se ha recibido tu petición, mi labor es avisarte y ya")
})

httpServer.listen(3000,()=>{
  console.log(`Servidor de libreria nativa escuchando en el puerto 3000`)
})











 

