let marks= parseInt (prompt("Enter the marks obtained:"))
if(marks>100){
    console.log("Invalid Marks");
}
else{
    switch(true){

    case marks >90 && marks<=100:
    console.log("S grade");
    break;
    
    case marks >=90:
    console.log("A grade");
    break;

    case marks >=80:
    console.log("B grade");
    break;

    case marks >=70:
    console.log("C grade");
    break;

    case marks >=60:
    console.log("D grade");
    break;

    case marks >=50 || marks ===40:
    console.log("E grade");
    break;

    default:
        console.log("Student has failed")
}
}