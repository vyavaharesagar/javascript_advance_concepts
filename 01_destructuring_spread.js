arr = [1,2,4,6,32]

function avg(a,b,c){
    return a+b+c/3;
}

// let a = avg(...arr);
let a = [4,7,...arr,67]
// console.log(a);

let a2 = [5,2,7]
let a3 = [...arr,...a2]
console.log(a3)

let obj1 = {
    name1:"harry",
    class1:"5b",
    favlang : "Jaascript"
}

// let obj2 = {};

// obj2.name = obj1.name;
// obj2.class = obj1.class;
// obj2.favlang = "Python";



let obj2 = { ...obj1, favlang:"Python"} 
console.log(obj2)

let {name1 , class1, favlang } = obj1;  //Destructuring

console.log(name1, class1, favlang);