const express = require('express');
const router = express.Router();

// Ruta pagina inicial:
router.get('/', (req, res) => {
  res.render('index', { title: 'web 2 desde node' });
});

//------------------------------------------

// Ruta pagina contacto:
router.get('/contacto', (req, res) => {
  res.render('contacto', { title: 'web 2 desde node' });
});

module.exports = router;
