File I/O: Country Info App

Goal : Create a Node.js application to read in and search a JSON file using a command line argument.

Assignment As a traveling developer, you always wanted a command line tool to help you get quick information on prospective destinations. You recently got hold of a file (countries.json) that has all the info you want! However it's a pain to open that JSON file in your text editor over and over whenever you need information. You just love your terminal that much! With your newfound skills you decide to make a Node.js application that helps you search that data easier.

    * Part 1:Your application should;Take in one parameter from the command line, the name of a country.
        - Note: command line arguments can be read from the global array process.argv Read and parse the countries.json file.

        - Note: you must usereadFile and not readFileSync.Output information about that specific country in the followingformat:

                    Country: <country name>  
                    Top Level Domain: <tld>...

    * Part 2:For this part, create a separate module for reading and parsing theJSON file, named "json-file-reader".This module should have a function that takes in a filename and a callback function as a parameter. It should then read that file, then parse the JSON. Finally, it should invoke the callback function and pass the parsed JSON to it. One way to think of this module is as a helper that can read and parse any JSON file. It has nothing to do with 'countries', so to speak. Another way to think of it is as a small wrapper to fs.readFile, except that this function only works with JSON files.

        Hints: Use JSON.parse to parse JSON data from files into a JavaScript object. Try first completing the assignment without creating a separate module - Extracting the second module out is significantly more difficult. Grading Criteria The program:Can accept at least one command line argument.Reads in the countries.json file using the readFile method from fs.
        Passes the filename and a callback function to json-file-reader and handles the JSON parsing in there.
