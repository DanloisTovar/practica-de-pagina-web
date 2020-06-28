const express = require('express');
const router = express.Router();

// Ruta pagina inicial:
router.get('/', (req, res) => {
  res.render('index.html', { title: 'web 2 desde node' });
});
//------------------------------------------
// Ruta pagina acerca:
router.get('/acerca', (req, res) => {
  res.render('acerca.html', { title: 'web 2 desde node' });
});

//------------------------------------------

// Ruta pagina contacto:
router.get('/contacto', (req, res) => {
  res.render('contacto.html', { title: 'web 2 desde node' });
});

//------------------------------------------
module.exports = router;
