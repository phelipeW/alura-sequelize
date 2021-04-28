const { Router } = require('express')
const PeopleController = require('../controllers/PeopleController')

const router = Router()

router.get('/people', PeopleController.index)
router.get('/people/:id', PeopleController.findById)
router.post('/people', PeopleController.create)
router.put('/people/:id', PeopleController.update)
router.delete('/people/:id', PeopleController.delete)

module.exports = router