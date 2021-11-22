class player{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    display(){
        console.log(this.name+" "+this.age);
    }

}
let p1=new player("jhon",35);
let p2=new player("doe",45);
p1.display();
p2.display();

const players:player[]=[];
players.push(p1);
players.push(p2);