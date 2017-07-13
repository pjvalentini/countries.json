// Index.js requires fs an jsonfilereader module.
const fs = require("fs");

const jsonfilereader = require('./jsonfilereader');

// The process.argv property returns an array containing the command line
// arguments passed when the Node.js process was launched.
const country = process.argv[2];

// This function takes the file path and a function
jsonfilereader('./countries.json', function(countries) {
	countries.forEach(function(item) {
		if (country === item.name) {
			for (var key in item) { // eslint-disable-line
				console.log(`${key}: ${item[key]}`);
			}
		}
	});
});
