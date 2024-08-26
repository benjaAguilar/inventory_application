async function getCraftsmanSection(req, res){
    res.render('craftsman', {inventory: ['a', 'b', 'c', 'd']});
}

async function postCraftsman(req, res) {
    res.redirect('/');
}

module.exports = {
    getCraftsmanSection,
    postCraftsman
}