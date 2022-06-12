//CONTROLADOR:
//1. Recibir peticiones
//2. Ejecutar logica de negocio
//3. LLamar a la capa de SERVICIOS
//4. Enviar las respuestas al cliente

//Importo el servicio
import {ServicioHabitacion} from '../services/ServicioHabitacion.js'

export class ControladorHabitacion{

    constructor(){}

    async buscarTodas(request,response){

        let servicioHabitacion= new ServicioHabitacion()
       
        try{ //Todo SALE BIEN
            response.status(200).json({
                mensaje:"Exito buscando los datos",
                data:await servicioHabitacion.buscarTodas(),
                estado:true
            })

        }catch(error){
            response.status(400).json({
                mensaje:"Error buscando los datos: "+error,
                data:[],
                estado:false
            })
        }
    }

    async buscarPorId(request,response){

        let servicioHabitacion= new ServicioHabitacion()
       
        let id=request.params.id
        console.log(id)
        try{ //Todo SALE BIEN
            response.status(200).json({
                mensaje:"Exito buscando los datos "+id,
                data:await servicioHabitacion.buscarPorId(id),
                estado:true
            })

        }catch(error){
            response.status(400).json({
                mensaje:"Error buscando los datos: "+error,
                data:[],
                estado:false
            })
        }

    }

    async registrar(request,response){

        let servicioHabitacion= new ServicioHabitacion()

        let datosPeticion=request.body
        try{

            await servicioHabitacion.registrar(datosPeticion)
            response.status(200).json({
                mensaje:"Exito agregando la habitacion",
                data:null,
                estado:true
            })

        }catch(error){

            response.status(400).json({
                mensaje:"Fallamos agregando la habitacion",
                data:[],
                estado:false
            })

        }


    }

    async editar(request,response){
        let servicioHabitacion= new ServicioHabitacion()
        let id=request.params.id
        let datosPeticion=request.body
        try{
            await servicioHabitacion.editar(id,datosPeticion)
            response.status(200).json({
                mensaje:"Exito editando la habitacion",
                data:null,
                estado:true
            })


        }catch(error){

            response.status(400).json({
                mensaje:"fallamos editando la habitacion "+error,
                data:[],
                estado:false
            })

        }
    }

    async elimnar(request,response){
        let servicioHabitacion= new ServicioHabitacion()
        let id=request.params.id
        try{
            await servicioHabitacion.eliminar(id)
            response.status(200).json({
                mensaje:"Exito eliminando la habitacion",
                data:null,
                estado:true
            })


        }catch(error){

            response.status(400).json({
                mensaje:"fallamos eliminando la habitacion "+error,
                data:[],
                estado:false
            })

        }
    }

}