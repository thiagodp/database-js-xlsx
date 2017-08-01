var database = require('.');

(async function() {
    var conn = database.open({ Database: 'test.xlsx' });

    let results = await conn.query("SELECT * FROM Sheet1");
    console.log(results);
    await conn.close();
})();