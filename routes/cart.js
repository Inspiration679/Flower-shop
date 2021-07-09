const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    console.log(document.cookie)

    res.render('cart', {
        title: "Корзина",
        // order: getCookie(document.cookie)
    })
})




module.exports = router