const {Router} = require('express')
const User = require('../models/User')
const router = Router()

router.get('/', (req, res) => {
    res.render('user_settings', {
        title: 'Настройки',
        // User.User.findAll({where: req.session.user_id},{include: [Password]})
    })
})

router.post('/save', (req, res) => {
    res.status(200).send('OK!')
})

module.exports = router