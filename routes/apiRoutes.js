const express = require('express')
      , apiRoutes = express.Router()

apiRoutes.get('/ticket/:id', (req, res) => {
  res.send('searching for ticket with id: '+req.params.id)
})

apiRoutes.post('/ticket/:id', (req, res) => {
  res.send('updating ticket with id: '+req.params.id)
})

// apiRoute.post('/ticket', (req, res) => {
//   res.send('searching for ticket, list all tickets')
// })
// apiRoute.post('/ticket', (req, res) => {
//   res.send('searching for ticket, list all tickets')
// })

module.exports = apiRoutes;