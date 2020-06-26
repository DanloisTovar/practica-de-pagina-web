const express = require('express');
const app = express();
const path = require('path');
//----------------------------------

//configuraciones:
//con esto se crea la constante que define al numero de puerto.
app.set('port', 3000);
//--------------------------------------------------------------

// Middlewares:

//--------------------------------------------------------------

// Rutas:
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/index.html'));
});
//--------------------------------------------------------------

// static folder (carpetas estaticas):
//--------------------------------------------------------------
//Puerto escuchando:
app.listen(app.get('port'), () => {
  console.log('servidor escuchando por el puerto:', app.get('port'));
});
