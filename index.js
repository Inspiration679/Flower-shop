const express = require('express')
const exphbs = require('express-handlebars')
const session = require('express-session')
const path = require('path')
const multer = require('multer')
const passport = require('passport')

const sequelize = require('./db_connect/db')
const homeRoutes = require('./routes/home')
const flowersRoutes = require('./routes/flowers')
const aboutRoutes = require('./routes/about')
const contactsRoutes = require('./routes/contacts')
const cartRoutes = require('./routes/cart')
const supportRoutes = require('./routes/support')
const createRoutes = require('./routes/create')
const loginRoutes = require('./routes/login')
const varMiddleware = require('./middleware/variables')

const app = express()

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

const storageConfig = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, "./public/uploads");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === "image/png" ||
        file.mimetype === "image/jpg"||
        file.mimetype === "image/jpeg" ||
        file.mimetype === "image/webp"){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
}

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(session({
    secret: 'secret value',
    resave: false,
    saveUninitialized: false
}))
app.use(varMiddleware)
app.use(passport.initialize())
app.use(passport.session())
app.use('/', homeRoutes)
app.use('/flowers', flowersRoutes)
app.use('/about', aboutRoutes)
app.use('/contacts', contactsRoutes)
app.use('/cart', cartRoutes)
app.use('/support', supportRoutes)
app.use('/create', createRoutes)
app.use('/login', loginRoutes)



app.use(multer({storage:storageConfig, fileFilter: fileFilter}).single("flower_image"));

const PORT = process.env.PORT || 3000

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


