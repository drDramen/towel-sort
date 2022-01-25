module.exports = function towelSort(matrix) {
    return matrix
        ? matrix.map((e, i) => (!(i % 2) ? e : e.reverse())).flat()
        : [];
};
