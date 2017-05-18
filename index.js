'use strict';

const express = require('express');
const bodyParser = require('body-parser');

const restService = express();

restService.use(bodyParser.urlencoded({
    extended:true
}));

restService.use(bodyPardser.json());

restService.post('/echo', funstion(req,res){
    var speech = req.body.result && req.body.result.parameter && req.body.result.parameter.echoText ? req.body.result.parameters.echoText
    return res.json({
        speech:speech,
        displayText : speech,
        source: 'webhook-echo-sample'
    });
});

restService.listen((process.env.PORT || 8000), function(){
    console.log("Server up and listening");
});