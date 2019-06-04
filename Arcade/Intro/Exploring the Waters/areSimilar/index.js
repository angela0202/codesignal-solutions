const areSimilar = (a, b) => {
    const aDif = a.filter((el, i) => el !== b[i]);
    const bDif = b.filter((el, i) => el !== a[i]);
    const reversed = bDif.reverse();

    return !aDif.length || aDif.every((el, i) => el === reversed[i])
};