require('dotenv').config()

const express = require('express')
      , apiRoutes = express.Router()
      , osticket = require('knex')({
        client:'mysql',
        connection: {
          host: process.env.osticket_host,
          user: process.env.osticket_user,
          password: process.env.osticket_password,
          database: process.env.osticket_db
        }
      })

apiRoutes.get('/ticket/:ticket_number', (req, res) => {
  console.log('searching for ticket with ticket number: '+req.params.ticket_number)
  osticket('ost_ticket').select()
    .rightJoin('ost_thread', 'ost_ticket.ticket_id', 'ost_thread.object_id')
    .where('ost_ticket.number', req.params.ticket_number)
    .then(data => {
      res.json(data)
    })
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