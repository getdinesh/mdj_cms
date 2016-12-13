/**
 * Created by dinesh on 11/20/16.
 */

module.exports = {

    setStudent:function(name, dbconn)
    {
        dbconn.one('insert into public."tblStudent"("Name") values($1) returning "newId"', [name])
            .then(function (data) {
                // success;
                console.log("Success!"+data.newId);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

};
//var api = function({});