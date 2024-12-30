function xyz():void{
  console.log("void function")
}

// function with callbacks

function callback(name:string , cb:(value:string)=>void){
  console.log("Rohan");
  cb("Rohan");
}

const greet = (arg:string)=>{
  console.log(`Hello Good Morning ${arg}`)
}

callback("Rohan", greet);


function optionalparams(name:string , age:number, gender?:string){
  console.log(name  , age, gender);
}
optionalparams("Rohan" , 21 , "male");

// Rest parameters
function sum(...arr : number[]){
  console.log(arr);

}

sum(1,2,3,4,5,6,7,8,9);
