const {Router} = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const router = Router()

router.get('/', async (req, res) => {
    res.render('login', {
        title: 'Аутентификация'
    })
})



router.post('/registration', async (req, res, next) => {
    if (req.body.reg_password === req.body.reg_repeatPassword) {
        const userEmail = await User.Password.findAll({
            where: {email: req.body.reg_email}
        })
        if (userEmail.length === 0) {
            try {
                const regPassword = bcrypt.hashSync(req.body.reg_password, bcrypt.genSaltSync(10), null)
                const regEmail = req.body.reg_email

                await User.Password.create({password: regPassword, email: regEmail})
                res.status(200)
                // res.locals.isAuth = true
                res.redirect('/')
            } catch (e) {
                console.log(e)
            }
        } else {
            res.status(400).send('Такой пользователь уже есть!')
        }
    } else {
        res.status(400).send('Пароли не совпадают')
    }
})

router.post('/log-in', async (req, res) => {
    // req.session.user = n
    req.session.isAuthenticated = true
    req.session.save(err => {
        if (err) {
            throw err
        }
        res.redirect('/')
    })
    // const userdata = await User.password.findAll({
    //     where: {email: req.body.login_email}
    // })
    // console.log(userdata)
    // const compareResult = await bcrypt.compare(userdata.password, bcrypt.genSaltSync(10), (err, res) => {
    //     return res
    // })
    // console.log(compareResult)
})
router.get('/logout', async (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login')
    })
})


module.exports = router
