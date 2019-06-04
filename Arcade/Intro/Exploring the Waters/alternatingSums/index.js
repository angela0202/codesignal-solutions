const alternatingSums = (a) => {
    return a.reduce((acc, curr, i) => !(i % 2) ? [acc[0] + curr, acc[1]] : [acc[0], acc[1] + curr], [0, 0]);
};