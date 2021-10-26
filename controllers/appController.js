const timestamp = require('unix-timestamp');
const dateTime = require('date-and-time');

function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

exports.date = (req, res) => {
    const date = req.params.date;
    console.log(parseInt('944006400', 10));
    const format =  'ddd, DD MMM YYYY HH:mm:ss';
    timestamp.fromDate(new Date(date)) ? res.json({ unix: timestamp.fromDate(new Date(date)) / 1000, utc: dateTime.format(new Date(date), format, true) + ' GMT'}) :
    isNumeric(date) ? res.json({ unix: parseInt(date, 10) / 1000, utc: dateTime.format(new Date(parseInt(date, 10) * 1000), format, true) + ' GMT'}) :
    res.send('INVALID INPUT, ENTER <UNIX-TIMESTAMP> OR <YYYY-MM-DD>');
};