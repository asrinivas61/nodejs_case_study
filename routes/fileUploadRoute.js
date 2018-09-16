var express = require('express');
var router = express.Router();

var { upload, fileUpload } = require('../module');

/* Upload file router */
router.post('/saveFile', upload.single('fileUpload'), fileUpload);

module.exports = router;
