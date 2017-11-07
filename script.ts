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