var express = require('express');
var router = express.Router();

var { upload, fileUpload, getParams, nonRepeatChar } = require('../module');


/* Upload file router */
router.post('/saveFile', upload.single('fileUpload'), fileUpload);

/* Fetch parameters from GET Api method */
router.get('/paramsApi', getParams);

/* First non-repeating char from a string */
router.post('/stringApi', nonRepeatChar);

module.exports = router;
