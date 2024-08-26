const { Router } = require('express');
const inventoryController = require('../controllers/inventoryController');
const craftsmanController = require('../controllers/craftsmanController');
const router = Router();

router.get('/', inventoryController.getIndex);

router.get('/items', inventoryController.getItemsSection);

router.get('/craftsman', craftsmanController.getCraftsmanSection);

router.post('/items', inventoryController.postItems);

router.post('/craftsman', craftsmanController.postCraftsman);

module.exports = router;