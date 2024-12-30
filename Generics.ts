// hum ek funtion ko use krte wakt bata sakte hain ki function args ko kis type se treat kare 

function log<T>(arg:T){
console.log(arg);
}

log<string>("Rohan"); // or log("Rohan")
log<number>(21);      //  or log(21)
log<boolean>(true);  // or log(true)


// Generics with interface

interface Hello<T>{
  name : string;
  age : number;
  key : T;
}

function hello(obj:Hello<string>){

}

hello({name:"foo" , age:25 , key:"hello user"})


// Generic Classes
class BottleMaker<T>{
  constructor(public key:T){}
}

let b1 = new BottleMaker<string>("hey");
let b2 = new BottleMaker<number>(12);
console.log(b1, b2);

function twist<T>(a:T , b:T):T{
  return <T> "hey";
}
twist<string>("hey" , "hello");