const express = require('express');
const app = express();
const path = require('path');
//----------------------------------

//configuraciones:
//con esto se crea la constante que define al numero de puerto.
app.set('port', 3000);

// agregar motor de plantillas:
app.set('view engine', 'ejs');

//configurar extenciones para el motor de plantillas:
app.engine('html', require('ejs').renderFile);

//indicar rutas de carpetas (cuando no son localizadas):
// --> app setea y buscame el archivo views en la raiz y en la carpeta views:
app.set('views', path.join(__dirname, '../views'));
//--------------------------------------------------------------

// Middlewares:

//--------------------------------------------------------------

// Rutas:
app.use(require('../routers/router'));
//--------------------------------------------------------------

// static folder (carpetas estaticas):
//--------------------------------------------------------------
//Puerto escuchando:
app.listen(app.get('port'), () => {
  console.log('servidor escuchando por el puerto:', app.get('port'));
});
