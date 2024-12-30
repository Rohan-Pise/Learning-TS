type newType = string | number | null;

function oneFunc(obj : newType){
  console.log(obj);
}

oneFunc("Rohan Pise");


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