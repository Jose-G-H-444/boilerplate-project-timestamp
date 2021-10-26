const timestamp = require('unix-timestamp');
const dateTime = require('date-and-time');

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

exports.date = (req, res) => {
    const input = req.params.date;
    const date = new Date(input);
    const format =  'ddd, DD MMM YYYY HH:mm:ss';
    timestamp.fromDate(date) ? res.json({ unix: timestamp.fromDate(date) * 1000 - 28800000, utc: dateTime.format(date, format, false) + ' GMT'}) :
    isNumeric(input) ? res.json({ unix: parseInt(input, 10), utc: dateTime.format(new Date(parseInt(input, 10)), format, true) + ' GMT'}) :
    res.send('INVALID INPUT, ENTER <UNIX-TIMESTAMP> OR <YYYY-MM-DD>');
};