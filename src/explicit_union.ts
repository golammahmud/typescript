let a:string|number;
//  let b:number;
a='typescript eplicit types';
a=10;
// b=10;
console.log(a,);


// array
// let arr:number[]=[1,2,3,4,5];
let arr:(number|string)[]=[1,2,3,4,5,'hello'];
arr.push(6);
console.log(arr);

//  '''create object'''
let obj:object={
    name:'sachin',
    age:30,
    address:{
        city:'pune',
        state:'maharashtra'
    }
}


let c:{name:string,age:number}={
    name:'sachin',
    age:30
}

console.log(obj);
console.log(c);


