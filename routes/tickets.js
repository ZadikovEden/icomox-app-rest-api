const express = require('express');
const router = express.Router();
const ticketsController = require('../controller/tickets');

/* GET tickets listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a tickets');
  });
  
router.get('/getTickets/:token', 
  ticketsController.getAllTickets
  );
router.get('/opened/:token', 
  ticketsController.getOpenTickets
  );
  module.exports = router;
  