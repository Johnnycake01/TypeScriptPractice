type DateType = String

//use of interface
interface nameFormat{
  firstName: String;
  lastName: String;
}
class User {
  name: nameFormat;
  age: String | number; // union
  gender: String;
  status: String;
  date: DateType;

  constructor(name: nameFormat, age: String | number, gender: String) {
    this.name = name;
    this.age = age;
    this.gender = gender
  }

  PrintFullName() {
    console.log(`your full name is ${this.name.firstName} ${this.name.lastName}`)
  }

  PrintAllUserInformation() {
    console.log(`first name is ${this.name.firstName}`)
    console.log(`last name is ${this.name.lastName}`)
    console.log(`age is ${this.age}`)
    console.log(`gender is ${this.gender}`)
    if (this.status !== undefined) {
      console.log(`status is ${this.status}`);
    }
    if (this.date !== undefined) {
      console.log(`date of birth is ${this.date}`);
    }
  }
}

//inheritance
class Admin extends User {

  adminId: number;
  PrintAllUserInformation() {
    if (this.adminId !== undefined) {
      console.log(`Admin Id${this.adminId}`);
    }
    console.log(`first name is ${this.name.firstName}`);
    console.log(`last name is ${this.name.lastName}`);
    console.log(`age is ${this.age}`);
    console.log(`gender is ${this.gender}`);
        if (this.status !== undefined) {
          console.log(`status is ${this.status}`);
        }
        if (this.date !== undefined) {
          console.log(`date of birth is ${this.date}`);
        }
  }
}


//creating object of user
let userJohnson = new User({ firstName: "Johnson", lastName: "Oyesina" }, 20, "male")

//print out incomplete details
console.log("=============print incomplete details=================")
console.log();
console.log("===full name===");
console.log();
userJohnson.PrintFullName()
console.log();
console.log();
console.log("===incomplete details====");
userJohnson.PrintAllUserInformation()
console.log();
console.log();
console.log();



//print out complete details
console.log("=============print complete details=================");
userJohnson.status = "Single"
userJohnson.date = "10th of March"
console.log();
console.log("===full name===");
userJohnson.PrintFullName();
console.log();
console.log();
console.log("===complete details====");
userJohnson.PrintAllUserInformation();