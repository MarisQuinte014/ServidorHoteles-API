import express from 'express'

//Importo el controlador de Habitaciones
import {ControladorHabitacion} from '../Controllers/ControladorHabitacion.js'
import {ControladorReserva} from '../Controllers/ControladorReservas.js'
//Creo un objeto de la clase ControladorHabitacion
let controladorHabitacion=new ControladorHabitacion()
let controladorReserva = new ControladorReserva()

//UTILIZO el metodo Router() de express
export let rutas=express.Router()

//LISTA DE SERVICIOS QUE OFRECE EL API
rutas.get('/api/v1/habitacion', controladorHabitacion.buscarTodas)
rutas.get('/api/v1/habitacion/:id', controladorHabitacion.buscarPorId)
rutas.post('/api/v1/habitacion', controladorHabitacion.registrar)
rutas.put('/api/v1/habitacion/:id', controladorHabitacion.editar)
rutas.delete('/api/v1/habitacion/:id', controladorHabitacion.elimnar)

//Reservas
rutas.get('/api/v1/reserva/:id', controladorReserva.buscarPorId)
rutas.post('/api/v1/reserva', controladorReserva.registrar)
rutas.put('/api/v1/reserva/:id', controladorReserva.editar)
rutas.delete('/api/v1/reserva/:id', controladorReserva.elimnar)
