// You should implement your task here.

module.exports = function towelSort(matrix) {
    let arr = [];
    if (!Array.isArray(matrix)) {
        return [];
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 1) {
            arr.push(matrix[i].sort((a, b) => b - a));
        } else {
            arr.push(matrix[i]);
        }
    }
    return arr.flat();
};
