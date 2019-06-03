const commonCharacterCount = (s1, s2) => {
    return s1.split('').reduce((acc, curr) => {
        if(s2.includes(curr)) {
            s2 = s2.replace(curr,"");
            return acc + 1
        }
        return acc;
    }, 0);
}
