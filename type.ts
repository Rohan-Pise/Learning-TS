type newType = string | number | null;

function myFunc(obj : newType){
  console.log(obj);
}

myFunc("Rohan Pise");


type newUser = {
  name: string,
  email:string,
}



type newAdmin = newUser & {
  getDetails(user : String):void
}




function newFunc(obj:newAdmin){
  console.log(obj.email);
  console.log(obj.getDetails)
}