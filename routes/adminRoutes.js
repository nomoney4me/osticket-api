require('dotenv').config()

const express = require('express')
      , adminRoutes = express.Router()
      , osticket = require('knex')({
        client:'mysql',
        connection: {
          host: process.env.osticket_host,
          user: process.env.osticket_user,
          password: process.env.osticket_password,
          database: process.env.osticket_db
        }
      })
adminRoutes.get('/', (req, res) => {
  console.log('request accepted')
  res.send('welcome to the admin home page')
})

// --- routes for tickets ---
adminRoutes.get('/ticket/:ticket_id', (req, res) => {
  res.send('searching for ticket with id: '+req.params.ticket_id)
})

adminRoutes.post('/ticket/:ticket_id', (req, res) => {
  res.send('updating ticket with id: '+req.params.ticket_id)
})

// --- routes for threads ---
adminRoutes.post('/thread/:thread_id', (req, res) => {
  res.send('update thread message with id: '+req.params.thread_id)
})

// --- routes for users ---
adminRoutes.get('/user', (req, res) => {
  res.send('list all users')
})

adminRoutes.get('/user/:user_id', (req, res) => {
  res.send('list user with id: '+req.params.user_id)
})

adminRoutes.post('/user/:user_id', (req, res) => {
  res.send('update user with id: '+req.params.user_id)
})

module.exports = adminRoutes;