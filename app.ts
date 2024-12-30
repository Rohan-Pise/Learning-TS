// Interfaces are used to provide type to the object 
// Like in a function we can write that myfunc(a:number , b:number ) how to assign such type to objects 


interface User {
   name:String,
    email:String,
    password : String
    gender?:String         // represents optional filed
}

interface Admin extends User{
 admin: boolean
}

// function definition
function myFunc(obj:User):void{
  console.log(obj.name);
  console.log(obj.email);
  console.log(obj.password);
  console.log(obj.gender);
}

//function call
myFunc({name:"Rohan",
       email:"rohanpise" ,
       password:"123xyz",
       gender: "male"
})


