var db = require('./../database');

//displaying main page
exports.basecontroller = ( req, res )=>{
    var sqlquery = 'SELECT * FROM `flat` ';
    db.query(sqlquery, (err,data,fields)=>{
        if (err) throw err;
        console.log(data);
        res.render('index', { title: 'List of hotels', hotels: data });
    });
    //res.render('index', { title: 'Express' });
};
