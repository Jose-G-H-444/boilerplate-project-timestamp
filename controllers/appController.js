function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

exports.date = (req, res) => {
    const input = req.params.date;
    let date;
    !input ? date = new Date() :
    isNumeric(input) ? date = new Date(parseInt(input, 10)) : date = new Date(input);
    date != "Invalid Date" ? res.json({ unix: Date.parse(date), utc: date.toUTCString()}) :
    res.json({ error: "Invalid Date"});
};