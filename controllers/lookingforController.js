var db = require('./../database');
var bodyParser = require('body-parser');



//displaying looking page
exports.loogkinforcontroller = ( req, res )=>{
    var sqlquery = 'SELECT `localization` FROM `flat` GROUP BY `localization`';
    db.query(sqlquery, (err,data,fields)=>{
        if (err) throw err;
        res.render('lookingfor', { title: 'List of hotels', hotels: data });
    });

    //res.render('lookingfor');
};

exports.loogkinforcontrollerPOST = ( req, res ) =>{
    var localization = req.body.localization;
    console.log(localization);
    var numberOfBeds = parseInt(req.body.numberOfBeds);
    var sqlquery = 'SELECT * FROM `flat` WHERE `localization` = "'+localization+'" AND `numberOfBeds` = '+numberOfBeds+';';
    console.log(sqlquery);
    db.query(sqlquery, (err, data, fields)=>{
        if (err) throw err;
        const isEmpty = Object.keys(data).length === 0;
        if(isEmpty===true){
            res.send('Sorry, cannot find');
        }else{
            res.render('lookingforResponse', { title: 'List of hotels', hotels: data });
        }
        console.log(isEmpty);
    });


};


exports.loogkinforcontrollerID = ( req, res )=>{
    var idOfFlat = parseInt(req.params.id);
    var sqlquery = 'SELECT * FROM `flat` WHERE id = ' + idOfFlat;
    console.log(sqlquery);
    db.query(sqlquery, ( err, data, fields )=>{
        if (err) throw err;
        console.log(data);
        res.render('test',{ title: 'List of hotels', hotels: data });
    });
};