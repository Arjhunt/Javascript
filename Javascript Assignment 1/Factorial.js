let number= parseInt(prompt("Enter a number :" ))

if(number<0){
    console.log(`Factorial of ${number} doesnot exist`);
}
else{
    let factNum= 1
    for(i=1; i<=number; i++){
       factNum=factNum*i
    }
    console.log(factNum);
}