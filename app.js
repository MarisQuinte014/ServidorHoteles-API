//IMPORTO LAS VARIABLES DE ENTORNO
//forma vieja de importar
//require('dotenv').config() 

import 'dotenv/config'

//IMPORTO LA CLASE SERVIDOR
import {Servidor} from './Server/Servidor.js'

//CREAR UN OBJETO DE LA CLASE SERVIDOR
let servidor = new Servidor()

//DESPERTAR EL SERVIDOR
servidor.despertarServidor()