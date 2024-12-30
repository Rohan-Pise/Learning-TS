// public

class Person{
  public name: string;
  constructor(name:string){
    this.name = name;
  }
  public greet(){
    console.log(`My name is ${this.name}`);
  }
}

const person = new Person("Rohan");
console.log(person.name);
person.greet();



// private
class BankAccount{
  private balance:number;
  constructor(initialBalance:number){
    this.balance = initialBalance;
  }

  getBalance(){
    return this.balance;
  }
}

const account = new BankAccount(1000);

console.log(account.getBalance()); //accessible
console.log(account.balance); // not accessible

//protected
class Animal{
  protected type:string;
  constructor(type:string){
    this.type=type;
  }
}

class Dog extends Animal{
  constructor(type:string , public breed :string){
    super(type);
  }

  getType(){
    return this.type;
  }

}

const dog = new Dog("Mammal", "Golden retriever");
console.log(dog.breed);
console.log(dog.type); // not accessible
console.log(dog.getType());
