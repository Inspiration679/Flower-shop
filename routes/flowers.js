const {Router} = require('express')
const Flower = require('../models/Flower')
const User = require('../models/User')
const auth = require('../middleware/auth')
const router = Router()

router.get('/', async (req, res) => {

    try{
        const flowers = await Flower.findAll({
            raw:true
        })
        res.render('flowers', {
            title: 'Цветы',
            flowers
        })

    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
})

router.post('/add', auth, async (req, res) => {
    res.send('ok')
})



module.exports = router
