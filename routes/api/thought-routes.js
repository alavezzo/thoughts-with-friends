const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    deleteAllThoughts
} = require('../../controllers/thought-controller');

router.route('/')
    .get(getAllThoughts)
    .delete(deleteAllThoughts)
    
router.route('/:userId')
    .post(createThought)

router.route('/:userId/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought)

module.exports = router;