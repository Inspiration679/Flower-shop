const {Router} = require('express')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const router = Router()

router.get('/', async (req, res) => {
    res.render('login', {
        title: 'Аутентификация'
    })
})

router.post('/', async (req, res, next) => {
    if (req.body.regpassword === req.body.regrepeatpassword) {
        const email = await User.User.findAll({where: {email: req.body.regemail}})
        if (email.length === 0) {
            try {
                const password = await bcrypt.hash(req.body.regpassword, 10)
                await User.User.create({
                    password,
                    email: req.body.regemail,
                    user_first_name: req.body.user_name,
                    user_second_name: req.body.user_surname
                })
                res.status(200).redirect('/')
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
    try {
        const email = req.body.loginEmail
        const password = req.body.loginPassword
        const candidate = await User.User.findAll({ where: {email} , raw: true})
        if (candidate) {
            const areSame = await bcrypt.compare(password, candidate[0].password)
            if (areSame) {
                req.session.user = candidate['email']
                req.session.id = candidate.iduser
                req.session.isAuthenticated = true
                req.session.save(err => {
                    if (err) {
                        throw err
                    }
                    res.redirect('/')
                })
            }
        } else {
            res.redirect('/login')
        }
    } catch (e) {
        console.log(e)
    }
})
router.get('/logout', async (req, res) => {
    req.session.destroy(() => {
        res.redirect('/login')
    })
})


module.exports = router


