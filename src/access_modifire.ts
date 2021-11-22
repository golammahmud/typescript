
// class Student {
//     private name: string;
//     private age: number;
//     readonly address: string;
//     private phone: string;

//     constructor(name: string, age: number, address: string, phone: string) {
//         this.name = name;
//         this.age = age;
//         this.address = address;
//         this.phone = phone;
//     }
//     show() {
//         console.log(this.name + " " + this.age + " " + this.address + " " + this.phone);
//     }
// }

// const jhon =new Student("Jhon", 20, "Kathmandu", "9876543210");
// jhon.show();

// jhon.name='doe'
// console.log(jhon.name);
// console.log(jhon.address);


class Student{
    constructor(private name:string, private age:number, private address:string, private phone:string)
    { }
    show(){
        console.log(this.name + " " + this.age + " " + this.address + " " + this.phone);

    }
}

const s1=new Student("Jhon",20,"Kathmandu","9876543210");
s1.show();
// s1.name = "doe";
// console.log(s1.name);