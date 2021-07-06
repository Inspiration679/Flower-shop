const {Router} = require('express')
const Flower = require('../models/Flower')
const router = Router()

router.get('/', async (req, res) => {
    try{
        const flower = await Flower.create({
            flower_name: 'Fikus',
            cost: 200,
            _description: 'good plant',
            image: 'www'
        })
        const temp = await Flower.findAll({
            attributes: ['flower_name', 'cost']
        })
        console.log(temp)
        res.render('flowers', {
            title: 'Цветы',

        })
    } catch (e) {
        console.log(e)
        res.status(500).json({
            message: 'Server error'
        })
    }
})



module.exports = router