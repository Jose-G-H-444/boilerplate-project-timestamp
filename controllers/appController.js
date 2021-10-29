const { URL } = require('url');

const stringIsAValidUrl = (s, protocols) => {
    try {
        url = new URL(s);
        return protocols
            ? url.protocol
                ? protocols.map(x => `${x.toLowerCase()}:`).includes(url.protocol)
                : false
            : true;
    } catch (err) {
        return false;
    }
};


exports.shorturl = (req, res) => {
stringIsAValidUrl(req.body.url, ['http', 'https']) ? res.json(req.body) : 
    res.json({ error: 'invalid url'});
};