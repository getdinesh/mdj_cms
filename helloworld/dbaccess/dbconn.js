/**
 * Created by dinesh on 11/20/16.
 */
var pgp = require('pg-promise')(/*options*/);
module.exports = {

    getConnection:function()
    {
        var cn = {
            host: 'localhost',
            port: 5432,
            database: 'postgres',
            user: 'postgres',
            password: 'postgres'
        };

        var dbConn = pgp(cn);
        return dbConn;
    }

};
