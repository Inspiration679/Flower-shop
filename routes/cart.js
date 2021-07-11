const {Router} = require('express')
const auth = require('../middleware/auth')
const router = Router()

router.get('/', auth, (req, res) => {
    console.log(document.cookie)

    res.render('cart', {
        title: "Корзина",
        // order: getCookie(document.cookie)
    })
})

module.exports = router
