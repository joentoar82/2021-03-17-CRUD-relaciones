const mongoose= require('mongoose')

const connectToDB = () =>{
    mongoose.set('useCreateIndex', true)

    mongoose.connect('mongodb://localhost:27017/equipoBIT', {
        useNewUrlParser:true, //Analizar las cadenas de conexión de MongoDB
        useUnifiedTopology:true //elimina la compatibilidad con varias opciones de conexión que ya no son relevantes o obsoletas

    }, (error)=>{
        if (error){ // Si existe un error
            console.log('Error->', error) //entonces me muestre el error
        } else{  //Sino hay error
            console.log('Nos conectamos correctamente...') //Que muestr que nos conectamos correctamente
        }
    })

}

/* Exportar esta conexión para poderla utilizarla en otros archivos */
module.exports= {connectToDB}