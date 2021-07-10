const {Router} = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const router = Router()

router.get('/', async (req, res) => {
    res.render('login')
})

router.post('/registration', async (req, res, next) => {
    if (req.body.password === req.body.repeatPassword) {
        const userEmail = await User.password.findAll({
            where: {email: req.body._email}
        });
        if (userEmail.length === 0) {
            try {
                const regPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null)
                const regEmail = req.body._email

                await User.password.create({password: regPassword, email: regEmail})
                res.status(200)
                res.redirect('/')
            } catch (e) {
                console.log(e)
            }
        } else {
            // log("Такой пользователь уже есть!")
            res.redirect('/login')
        }
    } else {
        // alert("Пароли не совпадают!")

        res.redirect('/login')
    }
})

router.post('/log-in', (req, res) => {
    console.log("code is wroking")
})

module.exports = router
