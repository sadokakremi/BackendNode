const router = require('express').Router();
const {findUser, addUser} = require('../controllers/controllerUser');

router.get('/', findUser);
router.post('/add', addUser);

module.exports = router;