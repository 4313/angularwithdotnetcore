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