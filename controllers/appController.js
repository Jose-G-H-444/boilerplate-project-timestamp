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
    timestamp.fromDate(date) ? res.json({ unix: Date.parse(date), utc: date.toUTCString()}) :
    isNumeric(input) ? res.json({ unix: parseInt(input, 10), utc: (new Date(parseInt(input, 10))).toUTCString() }) :
    res.json({ error: "Invalid Date"});
};