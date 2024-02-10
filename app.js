const express = require('express');
const app     = express();
const debug   = require('debug')('app');
const chalk   = require('chalk');
const hbs     = require('hbs');
const path    = require('path');

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,"./public/")));

app.get('/',(req,res)=>{
    res.send("Hello Word");
})
app.listen(9000, ()=>{
    debug('On port: '+chalk.blue('9000'));  
}) 
