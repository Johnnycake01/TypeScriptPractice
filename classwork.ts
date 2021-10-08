let input = require("prompt-sync")();

type DateType = String;

//use of interface
interface nameFormat {
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
    this.gender = gender;
  }

  PrintFullName() {
    console.log(
      `your full name is ${this.name.firstName} ${this.name.lastName}`
    );
  }

  PrintAllUserInformation() {
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

//inheritance
class Admin extends User {
  adminId: number;
  PrintAllUserInformation() {
    //method overiding
    if (this.adminId !== undefined) {
      console.log(`Admin Id is ${this.adminId}`);
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
let userJohnson = new User(
  { firstName: "Johnson", lastName: "Oyesina" },
  20,
  "male"
);

//print out incomplete details
console.log("=============print incomplete user details=================");
console.log();
console.log("===full name===");
console.log();
userJohnson.PrintFullName();
console.log();
console.log();
console.log("===incomplete details====");
userJohnson.PrintAllUserInformation();
console.log();
console.log();
console.log();

//print out complete details
console.log("=============print complete user details=================");
userJohnson.status = "Single";
userJohnson.date = "10th of March";
console.log();
console.log("===full name===");
userJohnson.PrintFullName();
console.log();
console.log();
console.log("===complete details====");
userJohnson.PrintAllUserInformation();

console.log();
console.log();
console.log();
console.log();
//creating object of Admin
let adminOsehi = new Admin(
  { firstName: "Osehi", lastName: "Android" },
  22,
  "male"
);

//print out incomplete details
console.log("=============print incomplete admin details=================");
console.log();
console.log("===full name===");
console.log();
adminOsehi.PrintFullName();
console.log();
console.log();
console.log("===incomplete details====");
adminOsehi.PrintAllUserInformation();
console.log();
console.log();
console.log();

//print out complete details
console.log("=============print complete admin details=================");
adminOsehi.status = "Married";
adminOsehi.date = "25th of December";
adminOsehi.adminId = 24;
console.log();
console.log("===full name===");
adminOsehi.PrintFullName();
console.log();
console.log();
console.log("===complete details====");
adminOsehi.PrintAllUserInformation();


console.log();
console.log();
console.log("==================fill in your details==================");

//requesting user input
let selection = input("select 1 for User and 2 for Admin   ")
let newUser: User;
let newAdmin: Admin;
if (selection == 1) {
  let selectFirstName:String = input("Please enter your Fisrt Name   ");
  let selectLastName: String = input("please enter your Last Name  ");
  let selectAge:number = input("please enter your Age   ");
  let selectGender: String = input("select a Gender, (m/f)   ");
  if(selectGender=="m"){selectGender="male"}else if(selectGender=="f"){ selectGender = "female"}
  let selectStatus: String = input("enter your Marital Status   ");
  let selectDOB: DateType = input("enter your Date Of Birth   ");


  //creating user object
  newUser = new User({ firstName: selectFirstName, lastName: selectLastName }, selectAge, selectGender)
  newUser.status = selectStatus
  newUser.date = selectDOB

} else if (selection == 2) {
  //collecting admin input
  let adminId: number = input("please enter admin Id")
  if (adminId == 10) {
    let selectFirstName: String = input("Please enter your Fisrt Name   ");
    let selectLastName: String = input("please enter your Last Name  ");
    let selectAge: number = input("please enter your Age   ");
    let selectGender: String = input("select a Gender, (m/f)   ");
    if (selectGender == "m") {
      selectGender = "male";
    } else if (selectGender == "f") {
      selectGender = "female";
    }
    let selectStatus: String = input("enter your Marital Status   ");
    let selectDOB: DateType = input("enter your Date Of Birth   ");

    //creating admin input
     newAdmin = new Admin(
       { firstName: selectFirstName, lastName: selectLastName },
       selectAge,
       selectGender
     );
     newAdmin.adminId = adminId;
     newAdmin.status = selectStatus;
     newAdmin.date = selectDOB;


  } else {
    console.log("invalid admin id")
  }
    
}
console.log();

let closeProgram = input("do you want to view your details y/n ")

if (closeProgram == "y") {
  if (selection == 1) {
    console.log();
    console.log();
    newUser.PrintAllUserInformation()
  } else {
    newAdmin.PrintAllUserInformation()
  }
} else {
  console.log("have a nice day")
}







