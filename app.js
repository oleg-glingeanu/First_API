const express = require('express');
const cors = require('cors');

const HOST = '127.0.0.1';
const PORT = 5000;

let app = express();

app.use((req,res,next) => {
    res.setHeader("Content-Type","application/json");
    next();
});

app.use(cors({ credentials: true}));
app.use('*', cors());

app.use('/',require('./controllers/index'));

app.use('/calculator',require('./controllers/calculator'));

app.use((req,res, next) =>{
    const err = new Error("Not found: " + req.method + ":" + req.originalUrl);
    err.status = 404;
    next(err);
});

const server = app.listen(PORT, HOST, () =>{
    console.log(`Express server listening on http://localhost:${PORT}`);
});

module.exports = app;