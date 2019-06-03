const adjacentElementsProduct = (arr) => {
    return Math.max(...arr.map((el, index) => el * arr[index + 1]).slice(0, -1));
};