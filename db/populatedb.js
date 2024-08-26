const { Client } = require("pg");

const SQL = `
CREATE TABLE IF NOT EXISTS inventory (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  item VARCHAR(255),
  craftsman_id INT,
  type_id INT
);

CREATE TABLE IF NOT EXISTS craftsmans (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS types (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  type VARCHAR(255)
);

INSERT INTO craftsmans (name) 
VALUES
  ('Attila the Hun'),
  ('Ragnar Lodbrok'),
  ('Olwyn the witch'), 
  ('Torsten the blacksmith'),
  ('Sigrid the cook');

INSERT INTO types (type) 
VALUES
  ('Potions'),
  ('Weapons'),
  ('Armor'), 
  ('Food'),
  ('Tools'),
  ('Miscellaneos');

INSERT INTO inventory (item, craftsman_id, type_id) 
VALUES
  ('Heal potion', 3, 1),
  ('LongBow', 1, 2),
  ('Steel plate armor', 4, 3), 
  ('Sweet roll', 5, 4),
  ('Ancient compass', 2, 5),
  ('Wedding ring', 4, 6);

`;

async function main() {
  console.log("seeding...");
  try{
    const client = new Client({
      connectionString: process.env.POPULATE_CONNECTION,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
  } catch(e){
    console.log(e);
  }

}

main();