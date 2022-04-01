const take = (fn, count) => {
    let arr = []; 
     for(let i = 0; i < count; i++){
        arr.push(fn()) 
     }
     return arr
}