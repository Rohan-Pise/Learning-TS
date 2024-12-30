class device{
 public name:string
 public price:number
 public category:string;

 constructor(name:string , price:number , category:string){
  this.name = name;
  this.price = price;
  this.category = category;
 }
  
}



let d1 = new  device("Watch" , 12000 ,"digital" );
console.log(d1);