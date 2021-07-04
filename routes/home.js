const {Router} = require('express')
const router = Router()
// const path = require('path')

router.get('/', (req, res) => {
    res.render('home', {
        title: 'Главная',
        isHome: true
    })
})

router.get('/instagram', (req, res) => {
    res.redirect('https://www.instagram.com/')
})

router.get('/telegram', (req, res) => {
    res.redirect('https://telegram.org/')
})

router.get('/facebook', (req, res) => {
    res.redirect('https://www.facebook.com/')
})

module.exports = router