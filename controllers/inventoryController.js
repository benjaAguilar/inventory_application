async function getIndex(req, res) {
    res.render('index', {inventory: ['a', 'b', 'c', 'd']});
}

async function getItemsSection(req, res){
    res.render('items', {
        craftsmans: ['a', 'b', 'c', 'd'],
        types: ['a', 'b', 'c', 'd']
    });
}

async function postItems(req, res){
    const {item, craftsman, type} = req.body;
    res.redirect('/');
}


module.exports = {
    getIndex,
    getItemsSection,
    postItems
}