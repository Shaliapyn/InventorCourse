const map = (fn, array) => array.map((el) => fn(el))

function square(x) { return x * x; } // возведение в квадрат

console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]