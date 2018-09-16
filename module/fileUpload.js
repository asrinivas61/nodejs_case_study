var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
  });
var upload = multer({ storage: storage });

var fileUpload = function(req, res, next) {
    res.json(1, 'success', `${req.file.originalname} file uploaded.`)
}

var getParams = function(req, res, next) {
    res.json(1, 'success', `params ${req.params.library} & ${req.params.book}`);
}

var nonRepeatChar = function(req, res) {
    let string = req.body.inputString;
    for (var i = 0; i < string.length; i++) {
        var char = string.charAt(i);
        if (string.indexOf(char) == i && string.indexOf(char, i + 1) == -1) {
            res.json(1, 'success', char);
        }
    }
    res.json(-1, 'error', null);
}

module.exports = {
    upload,
    fileUpload,
    getParams,
    nonRepeatChar
};

