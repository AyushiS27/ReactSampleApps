function debounce(fn, ms){
    let timer;

    return function(...arg){
        clearTimeout(timer);
        timer= setTimeout(() => {
            fn.apply(this, arg)
        },ms);
    }

}

function myFunction(a, b){
    console.log("Delay", a+b);
    return a + b;
}

let myFun = debounce(myFunction, 5000);
myFun(2, 3);