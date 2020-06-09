class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = "Khrulia Talimul Quran Dakhil Madrasha";
    }
}

const student1 = new Student(10, "Saif");
const student2 = new Student(12, "Saiful");
console.log(student1.school);