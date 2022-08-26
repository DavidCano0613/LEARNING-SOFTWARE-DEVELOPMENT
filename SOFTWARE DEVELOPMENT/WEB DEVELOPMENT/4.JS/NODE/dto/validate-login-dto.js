import { Type } from "@sinclair/typebox";
import Ajv from 'ajv';
import addErrors from 'ajv-errors';
import addFormats from 'ajv-formats';

// Esquema de validación nativo
// const DTO_PROPERTY_NAMES = ['email','password'];
// const LoginDtoSchema = {
//     type:'object',
//     properties:{
//         email:{type:'string',format:'email'},
//         password:{type:'string',format:'password'}
//     },
//     required:['email','password'],
//     additionalProperties:false
// }


// const validateloginDTO = (req,res,next) => {
//     const loginDto = req.body; 
//     if(typeof loginDto !== 'object') res.status(400).send(`Invalid body revieved: ${typeof loginDto} expected an object`)

//     const bodyPropertyNames = Object.keys(loginDto) 

//     const checkProperties = bodyPropertyNames.length === DTO_PROPERTY_NAMES &&  bodyPropertyNames.every(bodyPropertyNames => DTO_PROPERTY_NAMES.includes(bodyPropertyNames))

//     if(!checkProperties) return res.status(400).send("El body debe contener unicamente email y password")
// }


//*Con la libreria AJV 
// Con Avj: $ npm i @sinclair/typebox --save and npm i ajv

const LoginDTOSchema = Type.Object(
    {
        email: Type.String({
            format: 'email',
            errorMessage:{
                type:'El tipo debe ser un string',
                format:'Debe contener un correo electronico válido',
            },
        }),
        password: Type.String({
            errorMessage:{
                type:'El tipo debe ser un string',
                format:'Debe contener una password válida',
            },
        }),
    },
    {
        additionalProperties: false,
    }
);

const ajv = new Ajv({ allErrors:true })
addFormats(ajv,['email']).addKeyword('kind').addKeyword('modifier');;
addErrors(ajv);

const validate = ajv.compile(LoginDTOSchema)

const validateLoginDTO = (req, res, next) => {
    const isDTOValid = validate(req.body);
    if (!isDTOValid) res
    .status(400)
    .send(ajv.errorsText(validate.errors,{separator:"\n"}))
    next();
}

export default validateLoginDTO;



//Hay que validar que es un objeto
//Hay que validar que el objeto tiene las propiedades
//Hay que validar las propiedades
//Hay que validar los valores de las propiedades
// Por eso existe un estandar Json Schema: Es un formato de json quepermite defiir schemas de validación es decir se dice yo quiero que este objeto o  este json tenga este schema, es decir yo defino previamente cual como los objetos y cualquier dato va estar formado, que tipos de datos, logitudes tipo etc. Ese schema a traves de una función se pasa y se dan permisos de ir a una siguiente capa o de lo contrario se retorna un error informando que estuvo mal. Esto se puede hacer manuelamente o por medio de librerias ademas una vez se tiene el esquema y el objeto a validar se necesita una función que admita este esquema y sepa interpretarlo. Ajv
// npm i ajv-formats: añaden validacion de formatos 
// npm i ajv-erros:  para manejar los errores 

//* Formas de validar Data en JS  
// console.log(isNaN(45))
// console.log(typeof"Hola mundo")
// console.log(typeof("Hola mundo"))
// console.log(typeof(15454))
// console.log(typeof(true))
// console.log(typeof(false))
// console.log(typeof{nombre:"david"})
// console.log(typeof[1,2,3])
// console.log(typeof(["Hola",true,22]))


// function validaData(num,str,bool,arr,obj){
//     if(typeof num !== 'number') return "no ingresaste un numero"
//     if(typeof str !== 'string') return "no ingresaste un numero"
//     if(typeof bool !== 'boolean') return "no ingresaste un numero"
//     if(typeof obj !== 'object') return "no ingresaste un numero"
// }

// let num = 22, str = "david", bool = true, arr = [], obj = {}
// validaData(num,str,bool,arr,obj)

// checkout = https://www.30secondsofcode.org/js/s/validate-number