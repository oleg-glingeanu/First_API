const router = require('express').Router();

const validator = require('validator');

router.get('/', function(req, res){
    res.json({content : 'This is my default for calculator , try /calculator/add?a=2&b=3'});
});

router.get('./add', function(req, res){
    res.json("add two numbers passed via Querystring");
});
router.get('./subtract', function(req, res){
    res.json("add two numbers passed via Querystring");
});
router.get('./multiply', function(req, res){
    res.json("add two numbers passed via Querystring");
});
router.get('./divide', function(req, res){
    res.json("add two numbers passed via Querystring");
});



router.get('/subtract', (req, res) => {
  
    let numA = "";
    let numB = "";

    
    if ( typeof req.query.a !== 'undefined' && typeof req.query.b !== 'undefined'){
        
        numA = req.query.a;
        numB = req.query.b;

        if(!validator.isNumeric(numA,{no_symbols: true}) || !validator.isNumeric(numB,{no_symbols: true})){
            res.statusMessage = "Bad Request";
            res.status(400).end();
            return false;
        }
        else{
            numA = Number(req.query.a);
            numB = Number(req.query.b);
        }

    }
    else {
        res.statusMessage = "Bad Request = missing parameters";
        res.status(400).end();
    }
    
    res.json({
        a: numA,
        b: numB,
        sum: numA - numB
    });


});

router.get('/add', (req, res) => {
  
    let numA = "";
    let numB = "";

    
    if ( typeof req.query.a !== 'undefined' && typeof req.query.b !== 'undefined'){
        
        numA = req.query.a;
        numB = req.query.b;

        if(!validator.isNumeric(numA,{no_symbols: true}) || !validator.isNumeric(numB,{no_symbols: true})){
            res.statusMessage = "Bad Request";
            res.status(400).end();
            return false;
        }
        else{
            numA = Number(req.query.a);
            numB = Number(req.query.b);
        }

    }
    else {
        res.statusMessage = "Bad Request = missing parameters";
        res.status(400).end();
    }
    
    res.json({
        a: numA,
        b: numB,
        sum: numA + numB
    });


});
router.get('/multiply', (req, res) => {
  
    let numA = "";
    let numB = "";

    
    if ( typeof req.query.a !== 'undefined' && typeof req.query.b !== 'undefined'){
        
        numA = req.query.a;
        numB = req.query.b;

        if(!validator.isNumeric(numA,{no_symbols: true}) || !validator.isNumeric(numB,{no_symbols: true})){
            res.statusMessage = "Bad Request";
            res.status(400).end();
            return false;
        }
        else{
            numA = Number(req.query.a);
            numB = Number(req.query.b);
        }

    }
    else {
        res.statusMessage = "Bad Request = missing parameters";
        res.status(400).end();
    }
    
    res.json({
        a: numA,
        b: numB,
        sum: numA * numB
    });


});
router.get('/divide', (req, res) => {
  
    let numA = "";
    let numB = "";

    
    if ( typeof req.query.a !== 'undefined' && typeof req.query.b !== 'undefined'){
        
        numA = req.query.a;
        numB = req.query.b;

        if(!validator.isNumeric(numA,{no_symbols: true}) || !validator.isNumeric(numB,{no_symbols: true})){
            res.statusMessage = "Bad Request";
            res.status(400).end();
            return false;
        }
        else{
            numA = Number(req.query.a);
            numB = Number(req.query.b);
        }

    }
    else {
        res.statusMessage = "Bad Request = missing parameters";
        res.status(400).end();
    }
    
    res.json({
        a: numA,
        b: numB,
        sum: numA / numB
    });


});

module.exports = router;