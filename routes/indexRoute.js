const { Router } = require('express');
const inventoryController = require('../controllers/inventoryController');
const craftsmanController = require('../controllers/craftsmanController');
const { tryCatch } = require('../utils/tryCatch');
const router = Router();

router.get('/', tryCatch(inventoryController.getIndex));

router.get('/items', tryCatch(inventoryController.getItemsSection));

router.get('/:id/update', tryCatch(inventoryController.getUpdateItem));

router.post('/:id/update', tryCatch(inventoryController.postUpdateItems));

router.post('/:id/delete-item', tryCatch(inventoryController.postDeleteItem));

router.post('/items', tryCatch(inventoryController.postItems));

router.get('/craftsman', tryCatch(craftsmanController.getCraftsmanSection));

router.post('/craftsman', tryCatch(craftsmanController.postCraftsman));

router.get('/:id/craftsman-update', tryCatch(craftsmanController.getUpdateCraftsman));

router.post('/:id/craftsman-update', tryCatch(craftsmanController.postUpdateCraftsman));

router.post('/:id/delete-craftsman', tryCatch(craftsmanController.deleteCraftsman));

module.exports = router;