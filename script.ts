//install node and run npm install -g typescript. Then open in webstorm and say yes when it asks you if you want it to compile to javascript

//Class
class Product{
    private isValid: boolean = true;
    constructor(){
        console.log(this.isValid);
    }
}


//Typing
let fullName: string = "Daniel Bass";
let bob: Product = new Product();
console.log(fullName);

let x: [string,number];
x = ["bob",1];
x[0] = "bob";
x[1] = 2;

//enums
enum WeekDays {Monday, Tuesday, Wednesday, Thursday, Friday}
let friday = WeekDays.Friday;
let tuesday = WeekDays[1];

//Array destructuring
let list = ['iPhone X', 'Surface Pro', 'Pixel 2','bob','dave'];
let [first,second,third,...remaining] = list;
console.log(first);
console.log(remaining);


//Object destructuring. Allows us to easily create variables to use on their own from properties of an object.
let iphone = {
    quality:"poor",
};

let { quality } = iphone;
console.log(quality);

function setDefault(employee: {empName: string, companyName?:string}){
    //Question mark means nullable.

    // The '=' sign sets a default value
    let {empName, companyName = "Google"} = employee;
    console.log(empName);
    console.log(companyName);
}

setDefault({empName:'Bass'});
setDefault({empName: 'Bass',companyName:'bob'});

function setDefaultValues({empName,companyName} = {empName: 'Bass',companyName:'Cazton'}){
    console.log(`Employee name is ${empName} and company name is ${companyName}`);
    //This is showcasing the destructuring and setting of default values all in the parameters.
}

setDefaultValues();
setDefaultValues({empName:'bob',companyName:'dave'});

/*
We discovered a bug. Should be able to do this:
setDefaultValues({empName:'bob'});
but complains.
 */

//Use types or interfaces? Types are useful in unit tests, but generally use interfaces instead in prod.
type EmployeeType = {isFullTime: boolean, salary?:number, billRate?:number};

//you can use object destructuring on types as well
function getPaycheck({isFullTime,salary,billRate = 123}:EmployeeType){
    console.log(isFullTime);
    console.log(salary);
    console.log(billRate);
}

getPaycheck({isFullTime:true,salary:1234,billRate:27});

