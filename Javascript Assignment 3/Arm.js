const x= parseInt(prompt("enter a number:"))

let sum=0;
let temp= x;

while(temp>0){
    let rem=temp%10
    sum= sum+(rem*rem*rem)
    temp=parseInt(temp/10)
}
if(sum===x)
console.log(`${x} is an armstrong number`);
else{
    console.log(`${x} is not an armstrong number`);
}