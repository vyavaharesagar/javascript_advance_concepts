// map

//is array ke har element ke sath tum kya karna chahte ho
//it will not affect the original array

let a = [1,2,3,4];

let a2 = a.map((value)=>{
    return value*2;
})

// console.log(a,a2);

//filter

let a3 = a.filter((value)=>{
    return value>6  ;
})

// console.log(a,a3)

//reduce

let a4 = a.reduce((val1,val2)=>{
    return val1*val2;
})

console.log(a4)