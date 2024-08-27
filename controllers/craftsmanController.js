const db = require('../db/queries');

async function getCraftsmanSection(req, res){
    const { craftsmans } = await db.getTypesAndCraftsmans();
    
    res.render('craftsman', {craftsmans: craftsmans});
}

async function postCraftsman(req, res) {
    const { name } = req.body;
    await db.postCraftsman(name);
    
    res.redirect('/');
}

async function getUpdateCraftsman(req, res){
    const id = req.params.id;
    const craftsman = await db.getCraftman(id);

    console.log(craftsman);

    res.render('updateCraftsman', {craftsman: craftsman});
}

async function postUpdateCraftsman(req, res){
    const { name } = req.body;
    const id = req.params.id;

    await db.updateCraftsman(id, name);

    res.redirect('/craftsman');
}

async function deleteCraftsman(req, res){
    const id = req.params.id;

    await db.deleteCraftsman(id);

    res.redirect('/');
}

module.exports = {
    getCraftsmanSection,
    postCraftsman,
    getUpdateCraftsman,
    postUpdateCraftsman,
    deleteCraftsman
}