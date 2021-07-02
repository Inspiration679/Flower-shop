const express = require('express')
const app = express()
const indexRoutes = require('./routes/index')

app.use('/', indexRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
})

