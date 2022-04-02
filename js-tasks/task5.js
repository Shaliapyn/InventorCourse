function partial(fn, ...arg) {
    return function(...last){
        return fn(...arg, ...last)
    }
  }