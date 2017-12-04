let solve = function(value) {
    let checkSum = 0;
    parseMatrix(value).forEach((row) => {
        checkSum += rowDiff(parseRow(row));
    });
    return checkSum;
}

let parseMatrix = function(value) {
    return value.split('\n');
}

let parseRow = function(row) {
    return row.split('\t').map((element) => parseInt(element, 10));
}

let rowDiff = function(row) {
    let min = row[0], max = row[0];
    row.forEach((i) => {
        if(i < min) min = i;
        if(i > max) max = i;
    });
    return max - min;
}

module.exports = { solve, parseRow, parseMatrix, rowDiff };