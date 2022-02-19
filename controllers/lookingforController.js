var db = require('./../database');

//displaying looking page
exports.loogkinforcontroller = ( req, res )=>{
    res.send('Looking for site');
};
exports.loogkinforcontrollerID = ( req, res )=>{
    var idOfFlat = parseInt(req.params.id);
    var sqlquery = 'SELECT * FROM `flat` WHERE id = ' + idOfFlat;
    console.log(sqlquery);
    db.query(sqlquery, ( err, data, fields )=>{
        if (err) throw err;
        console.log(data);
        res.send(data);
    });
};