
const {Router} = require('express')
const Flower = require('../models/Flower')
const router = Router()

router.get('/', async (req, res) => {
    try{
        const temp = await Flower.findAll({where:{flower_name: "Fikus"}, raw:true})
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
