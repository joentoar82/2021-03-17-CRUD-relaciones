
const User = require('../models/user') // Requiero el modelo de mi documento

exports.create = (req, res)=>{
     const nUser = new User({ //En una constante voy  a guardar el modelo diligenciado
        code: req.body.code,
        userName: req.body.userName,
        email: req.body.email

     })

     nUser.save().then( //en caso de exito genera una instrucción

        data=>{
            res.send(data) //Me envía o me devuelva el caso exitoso
        }
     ).catch(  //En caso de un error o no exitosa, me devuelva un caso
        error=>{
            res.status(500).send({
                message: error.message || 'Error al crear el usuario'
            })
        }
     )}

     exports.findAll = (req,res)=>{ //Una función para encontrar todos los elementos
         User.find({}) /*Tomamos el modelo de user, utilizamos el metodo find 
         el metodo find recibe unos parametros que condicionan la busqueda cuando el objeto 
         que recibe  */
         .then((data)=>{
             res.send(data)  //En caso de exito envío la información
         })
         .catch((err)=>{
             res.status(500).send({message: "Hubo un error en el servidor"})
         })
     }

     exports.findOne = (req,res)=>{
         const id = req.params.id
         User.findById(id)
         .then((data)=>{
             if(!data){
                 res.status(404).send({message: "No se encontro el usuario con el id "+id})
             } else{
                 res.send(data)
             }
         })
         .catch((err)=>{  
             //console.log('err', err);
             res.status(500).send({message: "Error en el servidor"})
         })
     }

     exports.update = (req,res)=>{
         const id = req.params.id
         if(!req.body){
             return res.status(400).send({message: "El cuerpo de la petición no puede ir vacio"})
         }

         User.findByIdAndUpdate(id,req.body,{ useFindAndModify:false })
         .then((data)=>{
             if(!data){
                 res.status(404).send({message: "No se puede editar un usuario inexistente"})
             } else {
                 res.send({message: "El usuario se ha actualizado"})
             }
         })
         .catch((err)=>{
             res.status(500).send({message: "Hubo problemas en el servidor"})
         })
     }

     exports.delete = (req,res)=>{
         const id = req.params.id
         
         User.findByIdAndRemove(id)
         .then((data)=>{
             if(!data){
                 res.status(404).send({message: "No se puede eliminar el documento porque no se encontró"})
             } else {
                 res.send({message: "Se elimino el documento exitosamente"})
             }
         })
         .catch((err)=>{
             res.status(500).send({message: "Hubo un error en el servidor"})
         })
     }
    
