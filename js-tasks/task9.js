var input = [1, 2, 3, 4, 5, 6];
function isEven(x) { return x % 2 == 0; } // проверяет на четность

  const filter = (arr, fn) => arr.filter((e)=> isEven(e)) // виконання

  console.log(filter(input, isEven)); // [2, 4, 6]



  