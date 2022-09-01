let side1= parseInt(prompt("Enter a number :"))
let side2= parseInt(prompt("Enter a number :"))
let side3= parseInt(prompt("Enter a number :"))

if(side1===side2 && side2===side3 ){
    console.log("Its is an Equilateral Triangle ");
}

else if(side1===side2 || side2===side3 || side3===side1){
    console.log("Its an Isoceles Triangle");
}

else ("It is an Scalene Triangle")