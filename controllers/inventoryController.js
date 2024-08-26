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

async function postItems(req, res){
    const {item, craftsman, type} = req.body;
    await db.postItem(item, parseInt(craftsman), parseInt(type));
    
    res.redirect('/');
}


module.exports = {
    getIndex,
    getItemsSection,
    postItems
}