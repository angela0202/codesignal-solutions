const sortByHeight = (arr) => {
    const sorted = arr.filter(el => el !== -1).sort((a, b) => a- b);
    return arr.map((el, i) => el !== -1 ? sorted.shift() : -1);
};