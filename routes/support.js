const {Router} = require('express')
const router = Router()

router.get('/', (req, res) => {
    res.render('support', {
        title: 'Поддержка'
    })
})

module.exports = router