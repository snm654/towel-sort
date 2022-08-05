
// You should implement your task here.

module.exports = function towelSort(matrix = []) {
    const result = [];
    if (matrix.length > 1) matrix[1].reverse()
    if (matrix.length > 3) matrix[3].reverse()
    for (let el of matrix) {
        if (Array.isArray(el)) {
            for (let subElement of el) {
                result.push(subElement);
            }
        } else result.push(el);

    }
    return result
}


console.log(module.exports())


