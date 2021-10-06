var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    User.prototype.PrintFullName = function () {
        console.log("your full name is " + this.name.firstName + " " + this.name.lastName);
    };
    User.prototype.PrintAllUserInformation = function () {
        console.log("first name is " + this.name.firstName);
        console.log("last name is " + this.name.lastName);
        console.log("age is " + this.age);
        console.log("gender is " + this.gender);
        if (this.status !== undefined) {
            console.log("status is " + this.status);
        }
        if (this.date !== undefined) {
            console.log("date of birth is " + this.date);
        }
    };
    return User;
}());
//inheritance
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.PrintAllUserInformation = function () {
        if (this.adminId !== undefined) {
            console.log("Admin Id is " + this.adminId);
        }
        console.log("first name is " + this.name.firstName);
        console.log("last name is " + this.name.lastName);
        console.log("age is " + this.age);
        console.log("gender is " + this.gender);
        if (this.status !== undefined) {
            console.log("status is " + this.status);
        }
        if (this.date !== undefined) {
            console.log("date of birth is " + this.date);
        }
    };
    return Admin;
}(User));
//creating object of user
var userJohnson = new User({ firstName: "Johnson", lastName: "Oyesina" }, 20, "male");
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
var adminOsehi = new Admin({ firstName: "Osehi", lastName: "Android" }, 22, "male");
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
