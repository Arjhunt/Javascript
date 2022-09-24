// //function add is an higher oder fn

// function add(a,b,handle){
//     let result= a+b;
//     handle(result)
// }

// function print(result){
//     console.log("print the result", result);
// }

// function server(result){
//     console.log("server connected", result);

// }

// add(5,4, server)

// //How to call inner function when a function is in the return statement of another fn
// function outer() {
//   console.log("Outer function");
//   return function inner() {
//     console.log("Inner function");
//   };
// }

// let resu=outer()
// resu()

//closures means fn with lexical scope varibales

// function outer() {
//   let num1 = 20;
//   console.log("Outer fn", num1);
//   return function inner(num3) {
//     let num2 = 30;
//     return console.log("Inner fn", num1, num2, num3);
//   }
// }

// let result = outer();
// result(7);


// var a="HellO Wrold Wro"
// let str=a.search("Wr")
// let str= a.match(/Wr/g)
// let str= a.slice(2,6)
// let str=a.substr(2,4)
// let str=a.substring(6,2)
// console.log(str);

var str1="Hello World"
var str2= "Hello Arjhun"
//This is an example of regex
var res=str1.replace(/W/, "w")
console.log(res);

