// const arr=[2,5,7]
// const a=10
// const b= 15
// const newArr=[a,b,...arr]
// console.log(newArr);
// console.log(...newArr);

//with strings
// const name= "Jona"
// const newName= [...name,"", "s"]
// console.log(newName);


// //OR operator- IF the first value is a truthy value it will immediately return that value
// var a= 'helo'
// const playg= a || 12
// console.log(playg);

// //AND operator- if the first value is falsy, then it will return that and if its true it will display the last value

// const res='hello'&& 23 && null && 'wlecome'
// console.log(res);

// const res1= 0 && 'helo'
// console.log(res1);


//nullish- for 0 and ''- the value will be true(undefined and null- falsy value)

const green= 0
const red= green ?? 10
console.log(red);







