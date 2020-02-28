const router = require('express').Router();
const {findExercise,addExercise, findByOne, deleteErecise,updateEercise} = require('../controllers/controllerExercise');


router.get('/', findExercise);
router.post('/add', addExercise);
router.get('/:id', findByOne);
router.delete('/:id', deleteErecise);
router.post('/update/:id', updateEercise);








module.exports = router;