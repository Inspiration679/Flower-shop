const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')

const sequelize = require('./db_connect/db')
const homeRoutes = require('./routes/home')
const flowersRoutes = require('./routes/flowers')
const aboutRoutes = require('./routes/about')
const contactsRoutes = require('./routes/contacts')
const cartRoutes = require('./routes/cart')
const supportRoutes = require('./routes/support')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))


const PORT = process.env.PORT || 3000

app.use('/', homeRoutes)
app.use('/flowers', flowersRoutes)
app.use('/about', aboutRoutes)
app.use('/contacts', contactsRoutes)
app.use('/cart', cartRoutes)
app.use('/support', supportRoutes)


async function start(){
    try {
         await sequelize.sync()
         app.listen(PORT, () => {
            console.log(`Server has started on port: ${PORT}`)
        })
    } catch (e) {
        console.log(e)
    }
}

start()


