//* Módulos export: Su función es poder exportar código como su nombre lo indica, al exportar una variable, una función o cualquier otro tipo de código, lo que se hace es poder llamar o invocar dicho código desde cualquier otro archivo JavaScript diferente.

//Hay varias formas de exportar  

//* 1) 
const numeroPI = 3.14;
const saludar=()=>{
    console.log('Hola')
}

export {numeroPI,saludar}

//*2)

export const usuario = "JuanDaDev", password = "rx135victorm"

const objeto = {
    numeroPI,
    saludar,
    password
}

export {objeto}

//*3) Export default: Lo que hace es que una vez se mande a llamar el archivo exporta por defecto el código. 

//*Consideraciones 
//? Solo se puede export default una sola vez
//? Las constantes y variables se tienen que exportar despues de declaradas.
//? Las importaciones se hacen sin destructuring 

// let mensaje = 'Lets go'
const array = [1,2,4]

// export default mensaje
export default array



