let solver = require('./solver.js');

try {
    console.log(solver.captchaSolver(process.argv[2]));
} catch(e) {
    console.error('Please supply a valid number.');
}