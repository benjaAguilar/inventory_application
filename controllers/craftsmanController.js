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

module.exports = {
    getCraftsmanSection,
    postCraftsman
}