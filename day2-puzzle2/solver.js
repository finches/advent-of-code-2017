let solve = function(value) {
    let checkSum = 0;
    parseMatrix(value).forEach((row) => {
        checkSum += rowDivide(parseRow(row));
    });
    return checkSum;
}

let parseMatrix = function(value) {
    return value.split('\n');
}

let parseRow = function(row) {
    return row.split('\t').map((element) => parseInt(element, 10));
}

let rowDivide = function(row) {
    let result = 0;
    row.forEach((value, index) => {
        for(let i = index+1; i < row.length; i++) {
            if(row[i] % value === 0) result = row[i] / value;
            if(value % row[i] === 0) result = value / row[i];
        }
    });
    return result;
}

module.exports = { solve, parseRow, parseMatrix, rowDivide };