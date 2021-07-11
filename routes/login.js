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
    if (req.body.regpassword === req.body.regrepeatpassword) {
        const email = await User.User.findAll({where: {email: req.body.regemail}})
        console.log(email)
        if (email.length === 0) {
            try {
                await User.User.create({
                    password: await bcrypt.hash(req.body.regpassword, bcrypt.genSaltSync(10), null),
                    email: req.body.regemail,
                    user_first_name: req.body.user_name,
                    user_second_name: req.body.user_surname
                })
                res.status(200)
                res.redirect('/')
                next()
            } catch (e) {
                console.log(e)
                res.status(400).send('Упс! Что-то пошло не так(')
            }
        } else {
            res.status(400).send('Такой пользователь уже есть!')
        }
    } else {
        res.status(400).send('Пароли не совпадают')
    }
})

router.post('/log-in', async (req, res) => {
    req.session.user = await User.User.findAll({where: {email: req.body.loginemail}})
    req.session.isAuthenticated = true
    req.session.save(err => {
        if (err) {
            throw err
        }
        res.redirect('/')
    })

})
router.get('/logout', async (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login')
    })
})


module.exports = router
