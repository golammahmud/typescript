enum RType{
    success,
    error,
    warning,
    unauthenicated
}




interface APIResponse<T> {
    status: number;
    type: RType;
    data: T;

}

const r1: APIResponse<object> = {
    status: 200,
    type: RType.error,
    data: {
        id: 1,
        title: 'title',
        completed: true
    }
}

console.log(r1);


// create tuples
const a1 =[1,2,3,'hello',{name:"jhon",age:30}];
a1.push("typescript");
console.log(a1[4]);



 const tuple: [string, number,object] = ['hello', 10, {id: 1, title: 'title', completed: true}];
// tuple.push(true);



