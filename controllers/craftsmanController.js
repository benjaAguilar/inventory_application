const db = require('../db/queries');

async function getCraftsmanSection(req, res){
    res.render('craftsman');
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