// interface

// import {IsPerson} from '../module/person.js'
// const me:IsPerson = {
//     firstName: "John",
//     lastName: "Doe",
//     sayHi: (s:string) => {
//        console.log(s);
//        return s;
//     },
//     spend: (a:number) => {
//         return a;
//     }
// }
// console.log("hello " + me.sayHi('hh'));


// const getPerson = (person:IsPerson) => {
//     // return me;
//     console.log("hello"+' '+ person.firstName);
// }

// getPerson(me);



// interface Rectangleoptions {

//     // color?: string;
//     width?: number;
//     height?: number;

// }

// const drawRectangle = (options:Rectangleoptions) => {
//     console.log(options.width, options.height);
    
// }   


// let properties = {
//     width: 100,
//     height: 200,
//     color:'green',
// }

// drawRectangle(properties);






interface IsPerson{
    firstName: string;
    lastName: string;
    sayHi: (s:string) => string;
    spend(a:number): number;
    
}

class Employee implements IsPerson{
    firstName: string;
    lastName: string;
  
    constructor(firstName:string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayHi(s:string):string{
        console.log(s);
        return s;
    }
    spend(a:number):number{
        return a;
    }     
}

const jhon=new Employee('jhon','doe');

jhon.sayHi('hello');




