
class car {
    constructor (name1, brand, com, sales){
    this.name= name1;
    this.brand= brand;
    this.com=com;
    this.sales=sales
    }
    greet(){
        console.log(this.name);
    }
}
    
class engine extends car{
    constructor(name, enginetype, enginefeature){
        super(name);
        this.enginetype=enginetype;
        this.enginefeature= enginefeature;
    }
}
let engineres=new car("maruti")
engineres.greet()