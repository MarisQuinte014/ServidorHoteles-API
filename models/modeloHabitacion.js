//Importar mongoose
import mongoose from 'mongoose';

//ESQUEMA
const Schema = mongoose.Schema; //ESQUEMA DE DATOS (QUE DATOS TIENE MI MODELO)

//CREO MI PROPIO ESQUEMA DE DATOS
const Habitacion = new Schema({
    nombre:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    },
    capacidad:{
        type:Number,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    imagen:{
        type:String,
        required:true
    }
})

//se envia el modelo de datos
export const modeloHabitacion=mongoose.model('habitaciones', Habitacion);