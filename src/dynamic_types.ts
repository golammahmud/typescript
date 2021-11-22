// anytype also called dynamic type

let d:any = "hello";
d = 1;

console.log(d);


let anyarray:any[] = [1,2,3];
anyarray.push("hello");

console.log(anyarray);

let anyobject:{[key:string]:any} = {};
anyobject.name='jhon'
anyobject.age=30;
anyobject.status=true;

console.log(anyobject);



// how to use function in typescript

let myFunction:Function ;

myFunction=()=>{
    console.log("hello")
}
myFunction();


// optional parameter define ?
// const myFunc=(a:string,b:string,c?:number=10)=>{

    // set default parameter values
const myFunc=(a:string,b:string,c:number=10)=>{
    console.log(c);
    console.log(`Hello ${a} ${b}`)
}

myFunc("jhon","doe");


// undefined and void are different things .void is used to define function that does not return any value.
// undefined is used to define variable that is not assigned any value.

const add=(a:string,b:string,c:number=10)=>{
    console.log(c);
    return (`result ${a.concat(b)}`)
}
console.log(add("jhon","doe"));




// Type Aliases

type stringOrNumber = string | number;
type userType = {name:string,age:number};   // this is called interface

const userDetails = (id:stringOrNumber ,user:userType)=>{
    console.log(user.name);
    console.log(`user id:${id} name is ${user.name} and age ${user.age}`);
}

userDetails(1,{name:"jhon",age:30});