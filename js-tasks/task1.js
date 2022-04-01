function sequence(start = 0, step = 1) {
    let count = start;
    return function(){
        let res = count
        count += step
        return res
    }
  }
  let generator = sequence()
  console.log(generator())
  console.log(generator())
  console.log(generator())
