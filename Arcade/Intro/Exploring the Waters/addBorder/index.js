const addBorder = (picture) => {
    const asterisks = '*'.repeat(picture[0].length + 2);
    return ['*'.repeat(picture[0].length + 2), ...picture.map(el => `*${el}*`), '*'.repeat(picture[0].length + 2)]
};