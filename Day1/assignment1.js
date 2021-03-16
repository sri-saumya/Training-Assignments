function Counter(){
    let c=0;
    function count(){
        c = c+1;
        return c;
    }
    return count;
}
let cnt = Counter();
console.log(cnt());
console.log(cnt());
console.log(cnt());