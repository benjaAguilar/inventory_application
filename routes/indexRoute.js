const { Router } = require('express');
const inventoryController = require('../controllers/inventoryController');
const craftsmanController = require('../controllers/craftsmanController');
const router = Router();

router.get('/', inventoryController.getIndex);

router.get('/items', inventoryController.getItemsSection);

router.get('/:id/update', inventoryController.getUpdateItem);

router.post('/:id/update', inventoryController.postUpdateItems);

router.post('/:id/delete-item', inventoryController.postDeleteItem);

router.post('/items', inventoryController.postItems);

router.get('/craftsman', craftsmanController.getCraftsmanSection);

router.post('/craftsman', craftsmanController.postCraftsman);

router.get('/:id/craftsman-update', craftsmanController.getUpdateCraftsman);

router.post('/:id/craftsman-update', craftsmanController.postUpdateCraftsman);

router.post('/:id/delete-craftsman', craftsmanController.deleteCraftsman);

module.exports = router;