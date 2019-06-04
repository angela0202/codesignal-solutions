const arrayChange = (inputArray) => {
    let total = 0;
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i + 1] <= inputArray[i]) {
            const dif = inputArray[i] - inputArray[i + 1] + 1;
            total += dif;
            inputArray[i + 1] += dif;
        }
    }
    return total;
};