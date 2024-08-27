const db = require("../db/queries");

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

async function postItems(req, res){
    const {item, craftsman, type} = req.body;
    await db.postItem(item, parseInt(craftsman), parseInt(type));
    
    res.redirect('/');
}

async function postUpdateItems(req, res){
    const {item, craftsman, type} = req.body;
    const itemId = req.params.id;

    await db.updateItem(itemId, item, craftsman, type);
    
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