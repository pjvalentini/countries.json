const fs = require("fs");

function jsonParserReader(path, callback) {
	fs.readFile(path, "utf-8", function(err, data) {
		if (err) throw err;
		callback(JSON.parse(data));
	});
}

module.exports = jsonParserReader;
