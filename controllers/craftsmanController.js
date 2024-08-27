const db = require('../db/queries');
const { validateCraftsman } = require('../utils/validator');

async function getCraftsmanSection(req, res){
    const { craftsmans } = await db.getTypesAndCraftsmans();
    
    res.render('craftsman', {craftsmans: craftsmans});
}

async function postCraftsman(req, res) {
    const { error, value } = validateCraftsman(req.body);
    if(error){
        const { craftsmans } = await db.getTypesAndCraftsmans();

        res.status(400).render('craftsman', {
            craftsmans: craftsmans,
            errors: error.details
        });

        return;
    }

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
    const { error, value } = validateCraftsman(req.body);
    if(error){
        const id = req.params.id;
        const craftsman = await db.getCraftman(id);

        res.status(400).render('updateCraftsman', {
            craftsman: craftsman,
            errors: error.details
        });

        return;
    }

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