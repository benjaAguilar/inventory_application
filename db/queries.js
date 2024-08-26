const pool = require('./pool');

async function getInventory(){
    const { rows } = await pool.query(`
        SELECT item, craftsmans.name, types.type FROM inventory
        LEFT JOIN craftsmans 
        ON craftsman_id = craftsmans.id
        LEFT JOIN types
        ON type_id = types.id
        `);
    console.log(rows);
    return rows;
}

async function getTypesAndCraftsmans(){
    const craftsmans = await pool.query(`
        SELECT * FROM craftsmans
        `);
    const types = await pool.query(`
        SELECT * FROM types
       `);
    
    console.log(types.rows);

    return{
        craftsmans: craftsmans.rows,
        types: types.rows
    }
}

async function postItem(item, craftsman, type){
    await pool.query(`
        INSERT INTO inventory (item, craftsman_id, type_id) VALUES($1, $2, $3)
        `, [item, craftsman, type]);
}

async function postCraftsman(name){
    await pool.query(`
        INSERT INTO craftsmans (name) VALUES($1)
        `, [name]);
}


module.exports = {
    getInventory, 
    getTypesAndCraftsmans,
    postItem,
    postCraftsman
}