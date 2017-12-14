const express = require('express')
      , app = express();
let port = 3080;


app.use('/', require('./routes/publicRoutes.js'))
app.use('/api', require('./routes/apiRoutes.js'))
app.use('/admin', require('./routes/adminRoutes.js'))


console.log('listening on port: 3080')
app.listen(port)