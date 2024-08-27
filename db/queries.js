const pool = require('./pool');

async function getInventory(){
    const { rows } = await pool.query(`
        SELECT inventory.id, item, craftsmans.name, types.type FROM inventory
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

    return{
        craftsmans: craftsmans.rows,
        types: types.rows
    }
}

async function getAllTables(id){
    const { rows } = await pool.query(`
        SELECT * FROM inventory
        WHERE id = $1
        `, [id]);
    const {craftsmans, types} = await getTypesAndCraftsmans();

    return{
        item: rows[0],
        craftsmans: craftsmans,
        types: types
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

async function updateItem(id, item, craftsman_id, type_id){
    await pool.query(`
        UPDATE inventory
        SET item = $2,
        craftsman_id = $3,
        type_id = $4
        WHERE id = $1
        `, [id, item, craftsman_id, type_id]);
}

async function deleteItem(id){
    await pool.query(`
        DELETE FROM inventory
        WHERE id = $1
        `, [id]);
}


module.exports = {
    getInventory, 
    getTypesAndCraftsmans,
    postItem,
    postCraftsman,
    getAllTables,
    deleteItem,
    updateItem
}