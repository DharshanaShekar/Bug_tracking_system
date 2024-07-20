const router = require('express').Router();
const bugController = require('../controller/bug.controller');

router.post('/bugs', bugController.createBug);
router.put('/bugs/:id', bugController.editBug);
router.delete('/bugs/:id', bugController.deleteBug);
router.get('/bugs', bugController.getBugs);
router.get('/bugs/count', bugController.getBugCounts);
router.get('/bugs/:priority', bugController.getBugsByPriority);

module.exports = router;
