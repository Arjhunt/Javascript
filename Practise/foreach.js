const arr = [10, 20, 30, 40];
let result = 0;
// arr.forEach(number => {
//   result += number;
// })
// console.log(result);
for(i=0;i<arr.length;i++){
    result=arr[i]+result
}
console.log(result);