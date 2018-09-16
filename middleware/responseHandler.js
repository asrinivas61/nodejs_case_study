var express = require('express');

var resHandler = function(req, res, next) {
    let oldSend = res.json;

    res.json = function(data) {
        let args = new Array();
        let response = {};
        response.code = arguments[0];
        response.msg = arguments[1];
        response.result = arguments[2] ? arguments[2] : {};
        args[0] = response;
        oldSend.apply(res, args);
    }
    next();
}

module.exports = resHandler;