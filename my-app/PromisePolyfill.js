

const createPromise = (arg) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Arg value ",arg);
            if(arg == 2){
                reject("Issue");
            }
            resolve(arg);
        }, 1000);
    })
}


// const PromiseAllCustome = (data) => {
//     return new Promise((res, rej) => {
//         let counter = 0;
//         let responseArr = [];
//         const checkIfdone = () => {
            
//         }
//         for(let i = 0; i < data.length; ++i){
//             createPromise(data[i]).then((obj) => {
//                 ++counter;
//                 responseArr.push(obj);
//                 if(counter == data.length){
//                     res(responseArr);
//                 }
//             }, rej)
//         }
//     })
// }


// PromiseAllCustome([1, 2, 3]).then((data) => {
//     console.log("DAta", data);
// }).catch((err) => {
//     console.log("Wrr:",err);
// })


const PromiseAllSettle = (promise) => {
    

    let mappedPromise = promise.map((data) => {
        return createPromise(data).then((value) => {
            return {
                status: 'RESOLVE',
                value
            }
        },(err) => {
            return {
                status: 'REJECTED',
                err
            }
        })
    })

    return Promise.all(mappedPromise);
    
}  

    



// PromiseAllSettle([1, 2, 3]).then((data) => {
//     console.log("DAta", data);
// }).catch((err) => {
//     console.log("Wrr:",err);
// })




// Array.prototype.reduceCustom = function(fn, initial)  {
//     console.log("heelo", this);
//     let self = this;
//     let res = '';
    
//     for(let i = 0; i <= self.length; ++i){
        
//         initial = initial ? fn.apply(null, [self[i], initial]) : self[i];
        
//     }

//     return initial;
// }

// var values = [1, 2, 3, 4];
// values.reduceCustom((a,b) => {
//     console.log("val" , a, b);
//     return a+b}, 12);



let obj = {
    name :"Keshav"
}


let ayushi = function(){
    console.log("Value of bind", this.name);
}

Function.prototype.bindCustom = function(ele){
    let fn = this;
    // console.log("FN" , fn);

    return function(...args){
        fn.apply(ele, [args])
    }

}

// Function.prototype.myBind = function (obj) {
//     let func = this;
//     return function () {
//       func.apply(obj);
//     };
//   };
//let funcA = ayushi.bind(obj);

let funcA = ayushi.bindCustom(obj);

//funcA();


// function flat(obj,pre=''){
//     let res = {};
//     for(let key in obj){
//         if(typeof obj[key] === 'object'){
//             res = {...res, ...flat(obj[key], pre+key+'_')};
//         }
//         else {
//             res[pre+key] = obj[key];
//         }
//     }
//     return res;
// }


// function flat1(obj, pre=''){
//     let res = {};
//     for(var i in obj){
//         if(typeof obj[i] == 'object'){
//             res = {...res, ...flat1(obj[i], `${pre}${i}_`) };
//         }
//         else{
//             res[`${pre}${i}`] = obj[i]
//         }
//     }
//     return res;
// }

// const obj1 = {
//     name: "test",
//     address: {
//         personal: "abc",
//         office: {
//             building: 'random',
//             street: 'some street'
//         }
//     }
// }

// console.log(flat1(obj1));

// function getObjectAtPath(obj, path) {
//     let ele = path.split('.');
    

//     let copyObj = {...obj}, result;
    
//     for(let i = 0; i < ele.length; ++i){
//         if(ele[i] in copyObj){
//             copyObj = copyObj[ele[i]];
//             result = copyObj;
//         }else{
            
//             result = undefined;
//             break;
//         }
//     }
//     console.log("Path : ", copyObj, " ;;;; ", obj);   
//     return result;
// }   

// const inputObject = {a: {b: {c: 1}}};
// console.log(getObjectAtPath(inputObject, 'a.b.c')); // 1
// console.log(getObjectAtPath(inputObject, 'a.b')); // {c : 1}
// console.log(getObjectAtPath(inputObject, 'a.d.c')); // undefined

function memo(func, resolver = (...args) => args.join('_')) {
    const cache = new Map();
  
    return function(...args) {
      const cacheKey = resolver(...args);
      if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
      }
      const value = func.apply(this, args);
      cache.set(cacheKey, value);
      return value;
    }
  }



function memoization(fn, resolver = (...args) => args.join('_')){

    var cache = new Map();
    return function(...args){
        
        const cacheKey = resolver(...args);
        console.log("Args" ,cacheKey, ...args);
        if(cache.has(cacheKey)){
            return cache.get(cacheKey)
        }
        else{
            
            let res = fn.call(this, ...args);
            console.log("Output", res);
            cache.set(cacheKey, res)
            return res;
        }
    }
}


let custom = memoization((...args) => {
    return Math.max(...args);
})

console.log("Custome", custom('1','2', '3'));
console.log("Custome", custom('1','2', '3'));




