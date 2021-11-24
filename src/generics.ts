//  generics
// const userData=<T extends object>(obj:T)=>{
//     let id=Math.floor(Math.random()*100)
//     return {...obj,id}
// }



// giving object structure

const userData=<T extends{
    name:string,
    age:number

}>(obj:T)=>{
    let id=Math.floor(Math.random()*100)
    return {...obj,id}
}

const user={
    name:'jhon',
    age:25,
    address:'dhaka',
};
let  u1=userData(user)

// const user='jhon'
// let user1=userData(user)
console.log(u1.name,u1.age,u1.address,u1.id)






// use generics in interfaces

interface TodoResponse<T>{
    id:number,
    title:string,
    completed:boolean,
    data:T
}


const response:TodoResponse<object>={
    id:1,
    title:'title',
    completed:true,
   
    data:{
        name:'jhon',
        age:25,

    }
}
