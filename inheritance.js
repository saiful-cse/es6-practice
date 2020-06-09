class Parent{
    constructor(){
        this.fatherName = "Mohib";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
}

const baby1 = new Child("Yousuf");
const baby2 = new Child("Wasif");
console.log(baby1, baby2);