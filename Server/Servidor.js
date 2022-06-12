//IMPORTO EL FRAMEWORK EXPRESS
//const express = require('express') //verseion vieja de umportar
import express from 'express'

//Importo las rutas del API
import {rutas} from '../routes/rutas.js'

//Importo la conexiona bd
import {conectarConBD} from '../database/conexion.js'

export class Servidor{


    constructor(){
        this.app = express() //ATRIBUTO APP guarda a express
        this.conectarBD()
        this.llamarAuxiliares() //activo midlewares o ayudas
        this.atenderPeticiones()
    }

    despertarServidor(){
        this.app.listen(process.env.PORT,function(){
            console.log(`SERVIDOR ENCENDIDO EN ${process.env.PORT}`)
        })
    }

    atenderPeticiones(){
       //Llamando al archivo de rutas
       this.app.use('/',rutas)
    }

    llamarAuxiliares(){
        this.app.use(express.json()) //ayudante para recibir datos por el body de la peticion
    }

    conectarBD(){
        conectarConBD()
    }

}