const shapeArea = (n) => n === 0 || n === 1 ? n : n * 4 - 4 + shapeArea(n - 1);