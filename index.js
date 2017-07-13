// Index.js requires fs an jsonfilereader module.
const fs = require("fs");

const jsonfilereader = require('./jsonfilereader');

// The process.argv property returns an array containing the command line
// arguments passed when the Node.js process was launched.
const country = process.argv[2];

function leadingCase(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

// This function takes the file path and a function
// Inside the function is the code for a loop of the items
// An if stmt that if country is equal to item.name
// then loop over the items in the array.
// Inside the console log is the code to display the searched
// country info.
jsonfilereader('./countries.json', function(countries) {
	countries.forEach(function(item) {
		if (country === item.name) {
			for (var key in item) { // eslint-disable-line
				console.log(`${leadingCase(key)}: ${item[key]}`);
			}
		}
	});
});
