const {Router} = require('express')
const Flower = require('../models/Flower')
const router = Router()
const path = require('path')
const fs = require('fs')
const auth = require('../middleware/auth')

router.get('/', auth, (req, res) => {
    res.render('create', {
        title: 'Добавить цветы'
    })
})

router.post('/', auth,  (req, res) => {
    if(!req.body) return res.sendStatus(400);
    try {
        const flower_name = req.body.flower_name
        const cost = req.body.cost
        const description = req.body.description
        const _image = req.file
        const image = req.file.path.replace('public', '')
        console.log(image)

        res.status(200)

        Flower.create({
            flower_name,
            cost,
            _description: description,
            image
        })
    } catch (e) {
        console.log(e)
    }




    res.redirect('/create')

})

module.exports = router