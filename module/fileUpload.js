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
    let prod = req.params.nbr1 * req.params.nbr2
    res.json(1, 'success', `${req.params.nbr1} * ${req.params.nbr2} = ${prod}`);
}

var nonRepeatChar = function(req, res) {
    let string = req.body.inputStr;
    try {
        for (var i = 0; i < string.length; i++) {
            var char = string.charAt(i);
            if (string.indexOf(char) == i && string.indexOf(char, i + 1) == -1) {
                res.json(1, 'success', char);
            }
        }
    } catch(err) {
        // res.error(-1, 'error', err);
    }
}

module.exports = {
    upload,
    fileUpload,
    getParams,
    nonRepeatChar
};

