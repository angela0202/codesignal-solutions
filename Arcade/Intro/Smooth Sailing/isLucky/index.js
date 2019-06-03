const isLucky = (n) => {
    const splitedNumber = `${n}`.split(''), half = splitedNumber.length / 2;
    const firstHalfSum = splitedNumber.reduce((acc, curr, i) => i <= half - 1 ? acc + Number(curr) : acc, 0);
    const secondHalfSum = splitedNumber.reduceRight((acc, curr, i) => i >= half ? acc + Number(curr) : acc, 0);

    return firstHalfSum === secondHalfSum;
}