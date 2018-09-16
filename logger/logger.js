var path = require('path');
var fs = require('fs');
var rfs = require('rotating-file-stream');

var logDirectory = path.join(__dirname, '../', 'log');

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory);

var logFormat = process.env.NODE_ENV === 'production' ?
                ':remote-addr - :remote-user [:date[web]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent"' :
                'dev';

// create a rotating write stream
var accessLogStream = process.env.NODE_ENV === 'production' ? rfs('access.log', {
  interval: '1d', // rotate daily
  path: logDirectory
}) : process.stdout;

module.exports = {
    logFormat,
    accessLogStream
}
