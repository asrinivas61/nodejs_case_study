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
    res.send({ msg: 'hello' })
}

module.exports = {
    upload,
    fileUpload
};

