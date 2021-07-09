const {Router} = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const router = Router()

router.get('/', async (req, res) => {
    res.render('login')
})

router.post('/registration', async (req, res, next) => {
    if (req.body.password === req.body.repeatPassword) {
        const userEmail = await User.findAll({
            include: [passwords],
            attributes: [req.body._email]
        })
        if (userEmail.length === 0) {
            try {
                const regPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10), null)
                const regEmail = req.body._email

                await User.create({password: regPassword, email: regEmail}, {include: [passwords]})
                res.status(200)
            } catch (e) {
                console.log(e)
            }
        } else {
            const err = new Error('Такой пользователь уже есть!');
            err.status = 400;
            next(err);
            // console.log(err)
        }
    } else {
        const err = new Error('Пароли не совпадают!')
        err.status = 400
        next(err)
        // console.log(err)
    }
})

router.post('/log-in', (req, res) => {
    console.log("code is wroking")
})

module.exports = router
