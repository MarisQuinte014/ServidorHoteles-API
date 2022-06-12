//Importo els ervicio
import {ServicioReserva} from '../services/ServicioReserva.js'
import {ServicioHabitacion} from '../services/ServicioHabitacion.js'

export class ControladorReserva{

    constructor(){}

    async buscarPorId(request,response){

        let servicioReserva= new ServicioReserva()
        let id=request.params.id
        console.log(id)

        try{
            response.status(200).json({
                mensaje:"Exito buscando los datos "+id,
                data:await servicioReserva.buscarPorId(id),
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

        let servicioReserva= new ServicioReserva()
        let servicioHabitacion= new ServicioHabitacion()

        let datosPeticion=request.body
        try{

            //Consultar cuanto vale por noche una habitacion
            let habitacionConsultada = await servicioHabitacion.buscarPorId(datosPeticion.idHabitacion)
            let precio = habitacionConsultada.precio

            //fecha Salida
            let fechaSalida = datosPeticion.fecha_out

            //fecha Inicio
            let fechaInicio = datosPeticion.fecha_in

            //restar las fechas entrada menos salida
            let diasTotales = fechaSalida.getTime() - fechaInicio.getTime()

            let costoTotal = diasTotales * precio

            datosPeticion.costoTotal = costoTotal

            await servicioReserva.registrar(datosPeticion) // ingresar la reserva
            response.status(200).json({
                mensaje:"Exito agregando la reserva",
                data:null,
                estado:true
            })

        }catch(error){

            response.status(400).json({
                mensaje:"Fallamos agregando la reserva"+error,
                data:[],
                estado:false
            })

        }


    }

    async editar(request,response){
        let servicioReserva= new ServicioReserva()
        let id=request.params.id
        let datosPeticion=request.body
        try{
            await servicioReserva.editar(id,datosPeticion)
            response.status(200).json({
                mensaje:"Exito editando la reserva",
                data:null,
                estado:true
            })


        }catch(error){

            response.status(400).json({
                mensaje:"fallamos editando la reserva "+error,
                data:[],
                estado:false
            })

        }
    }

    async elimnar(request,response){
        let servicioReserva= new ServicioReserva()
        let id=request.params.id
        try{
            await servicioReserva.eliminar(id)
            response.status(200).json({
                mensaje:"Exito eliminando la reserva",
                data:null,
                estado:true
            })


        }catch(error){

            response.status(400).json({
                mensaje:"fallamos eliminando la reserva "+error,
                data:[],
                estado:false
            })

        }
    }

}