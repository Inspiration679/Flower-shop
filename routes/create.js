const {Router} = require('express')
const Flower = require('../models/Flower')
const router = Router()

router.get('/', (req, res) => {
    const flowers = Flower.findAll({raw:true})

    res.render('create', {
        title: 'Добавить цветы'
    })
})


module.exports = router