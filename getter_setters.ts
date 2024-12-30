class User{
  constructor(public username:string , public age:number){}
  getName(){
    return this.username;
  }

  setName(value:string){
    this.username=value;
  }
}

let u1 = new User("Rohan" , 21);
console.log(u1.getName());