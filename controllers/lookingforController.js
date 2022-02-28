var db = require('./../database');
var bodyParser = require('body-parser');



//displaying looking page
exports.loogkinforcontroller = ( req, res )=>{
    res.render('lookingfor');
};

exports.loogkinforcontrollerPOST = ( req, res ) =>{
    var localization = req.body.localization;
    var numberOfBeds = parseInt(req.body.numberOfBeds);
    var sqlquery = 'SELECT * FROM `flat` WHERE `localization` = "'+localization+'" AND `numberOfBeds` = '+numberOfBeds+';';
    console.log(sqlquery);
    db.query(sqlquery, (err, data, fields)=>{
        if (err) throw err;
        console.log(data);
        res.send(data);
    });


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