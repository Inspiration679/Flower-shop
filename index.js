const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const multer = require('multer')

const sequelize = require('./db_connect/db')
const homeRoutes = require('./routes/home')
const flowersRoutes = require('./routes/flowers')
const aboutRoutes = require('./routes/about')
const contactsRoutes = require('./routes/contacts')
const cartRoutes = require('./routes/cart')
const supportRoutes = require('./routes/support')
const createRoutes = require('./routes/create')

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
        cb(null, "/public/uploads");
    },
    filename: (req, file, cb) =>{
        cb(null, file.originalname);
    }
});

const fileFilter = (req, file, cb) => {

    if(file.mimetype === "image/png" ||
        file.mimetype === "image/jpg"||
        file.mimetype === "image/jpeg"){
        cb(null, true);
    }
    else{
        cb(null, false);
    }
}

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended: true}))
app.use(multer({storage:storageConfig, fileFilter: fileFilter}).single("image"));

const PORT = process.env.PORT || 3000

app.use('/', homeRoutes)
app.use('/flowers', flowersRoutes)
app.use('/about', aboutRoutes)
app.use('/contacts', contactsRoutes)
app.use('/cart', cartRoutes)
app.use('/support', supportRoutes)
app.use('/create', createRoutes)

app.post('/create-add', (req, res) => {
    // if(!req.body) return res.sendStatus(400);

    const flower_name = req.body.flower_name
    const cost = req.body.cost
    const description = req.body.description
    const image = req.file.path
    console.log(image)
    res.redirect('/create')

})

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


