let sum=0;
let x=0;

    for(x=0;x<1000;x++){

        if(x%3==0 || x%5==0){
            sum=sum+x;
        }
    }
    console.log(sum);
