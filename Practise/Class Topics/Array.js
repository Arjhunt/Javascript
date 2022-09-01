// const diff=[5,"hello", {name: "helo"}, function foo(){console.log('hi');}]
// console.log(diff);
// diff[3]()

// let nums=[]
// nums[0]=1
// nums[99]= 99

// //for in loop
// for(let i in nums)
// console.log(nums[i]);

// //for of loop
// for(let num of nums)
// console.log(nums[num]);

// //splice- does the operation of delete
// const arr=[1,2,5,9,7]
// arr.splice(0,2)
// console.log(arr);

// const ar=[1,4,8]
// ar.splice(2)
// console.log(ar);

// const arr1=[1,2,5,9,7]
// arr1.forEach((num)=>{
// console.log(num);
// })

// //filter method && map method
// const arr2=[6,2,5,9,7]
// arr2.filter((num)=>{ 
//     return num%2===0;
// }).map((num1)=>num1*2)
// .forEach((num2)=>console.log(num2))

//reduce method
const arr3=[1,23,54,44]
let res=arr3.reduce((num1, num2)=>{
    return num1+num2
},10)
console.log(res);