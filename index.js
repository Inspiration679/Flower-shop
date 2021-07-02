const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const homeRoutes = require('./routes/index')
const flowersRoutes = require('./routes/flowers')
const aboutRoutes = require('./routes/about')
const contactsRoutes = require('./routes/contacts')
const cartRoutes = require('./routes/cart')

const app = express()


const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', hbs)
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))


const PORT = process.env.PORT || 3000

app.use('/', homeRoutes)
app.use('/flowers', flowersRoutes)
app.use('/about', aboutRoutes)
app.use('/contacts', contactsRoutes)
app.use('/cart', cartRoutes)


app.listen(PORT, () => {
    console.log(`Server has started on port: ${PORT}`)
})

