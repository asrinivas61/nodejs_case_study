var express = require('express');
var router = express.Router();

var { upload, fileUpload, getParams, nonRepeatChar } = require('../module');


/* Upload file router */
router.post('/saveFile', upload.single('fileUpload'), fileUpload);

/* Fetch parameters from GET Api method */
router.get('/:nbr1/paramsApi/:nbr2', getParams);

/* First non-repeating char from a string */
router.post('/strNonOccr', nonRepeatChar);

module.exports = router;
