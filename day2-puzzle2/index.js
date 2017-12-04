let solver = require('./solver.js');
let fs = require('fs');

try {
    fs.readFile(process.argv[2], 'utf8', function(err, data) {
        if (err) throw err;
        console.log(solver.solve(data));
      });
} catch(e) {
    console.error('Please supply a valid file name.');
}