const express = require('express');
const app = express();
//----------------------------------

//configuraciones:
//con esto se crea la constante que define al numero de puerto.
app.set('port', 3000);
//--------------------------------------------------------------

// Middlewares:

//--------------------------------------------------------------

// Rutas:
//--------------------------------------------------------------

// static folder (carpetas estaticas):
//--------------------------------------------------------------
//Puerto escuchando:
app.listen(app.get('port'), () => {
  console.log('servidor escuchando por el puerto:', app.get('port'));
});
