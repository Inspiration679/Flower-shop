const express = require('express')
const app = express()
const homeRoutes = require('./routes/home')

const PORT = process.env.PORT || 3000

app.use('/', homeRoutes)

app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
})

