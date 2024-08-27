const db = require("../db/queries");
const { validateItem, validateUpdateItem } = require("../utils/validator");

async function getIndex(req, res) {
    const inv = await db.getInventory();
    console.log(inv);
    res.render('index', {inventory: inv});
}

async function getItemsSection(req, res){
    const {craftsmans, types} = await db.getTypesAndCraftsmans();
    res.render('items', {
        craftsmans: craftsmans,
        types: types
    });
}

async function getUpdateItem(req, res){
    const itemId = req.params.id;
    const {item, craftsmans, types} = await db.getAllTables(itemId);
    console.log(item)
    res.render('updateItem', {item: item, craftsmans: craftsmans, types: types});
}

async function postItems(req, res, next){
    const { error, value } = validateItem(req.body);
    if(error){
        const {craftsmans, types} = await db.getTypesAndCraftsmans();
        
        res.status(400).render('items', {
            craftsmans: craftsmans,
            types: types,
            errors: error.details
        });

        return;
    }

    const {item, craftsman, type} = req.body;
    await db.postItem(item, parseInt(craftsman), parseInt(type));
    
    res.redirect('/');
}

async function postUpdateItems(req, res, next){
    const { error, value } = validateUpdateItem(req.body);
    if(error){
        const itemId = req.params.id;
        const {item, craftsmans, types} = await db.getAllTables(itemId);

        res.status(400).render('updateItem', {
            item: item,
            craftsmans: craftsmans,
            types: types,
            errors: error.details
        });

        return;
    }

    const {updatedItem, craftsman, type} = req.body;
    const itemId = req.params.id;

    await db.updateItem(itemId, updatedItem, craftsman, type);
    
    res.redirect('/');
}

async function postDeleteItem(req, res){
    const itemId = req.params.id;
    await db.deleteItem(itemId);

    res.redirect('/');
}


module.exports = {
    getIndex,
    getItemsSection,
    postItems,
    getUpdateItem,
    postDeleteItem,
    postUpdateItems
}