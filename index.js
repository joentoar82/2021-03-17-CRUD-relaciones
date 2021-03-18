const express= require('express') /* Importar, requerir todas las funcionalidades de express y almacenarlas en una constante */

var cors= require('cors') /* Permite que el frontend pueda acceder a la información de la api */

const bodyParser=require('body-parser') /* Trabajar con el cuerpo petición, Json */

const {connectToDB} = require('./db') //Importamos el archivo db


const app= express() /* Instanciar Express, llamar las funcionalidades de express por medio del objeto */

app.use(cors())
app.use(bodyParser.json()) /* Con express voy a utilizar esto */
connectToDB()  //ejecutamos la función que esta en el archivo db

require('./routes/userRoutes')(app) //Se envìa la información de la carga de express a ese archivo
require('./routes/asignature')(app)

app.listen(3000, ()=>{
    console.log('Nos hemos conectado!!')
} ) /* Metodo de escucha, me pide un puerto y un call back (call back función despues e otra) */




