const express = require('express')
      , publicRoutes = express.Router()

publicRoutes.get('/', (req, res) => {
  console.log('testing')
  res.send('welcome to the home page')
})

module.exports = publicRoutes;