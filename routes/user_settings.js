const {Router} = require('express')
const User = require('../models/User')
const auth = require('../middleware/auth')
const router = Router()

router.get('/', auth, (req, res) => {
    res.render('user_settings', {
        title: 'Настройки',
        // User.User.findAll({where: req.session.user_id},{include: [Password]})
    })
})

router.post('/save', auth, (req, res) => {
    res.status(200).send('OK!')
})

module.exports = router