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


//Be very careful of private modifiers if you are using webpack. It deletes it and makes it public, well known bug.
class Catalog{
    private products: Array<string>;

    //Typescript only allows one constructor.
    constructor(list: Array<string>){
        this.products = list;
    }
}

//Theres a shorthand version. Does not reduce size of compiled javascript
class ShortHandCatalog{
    constructor(private list: Array<string>){

    }

    //This is a method returning null that just writes out each element in the list
    listAll():void{
        this.list.forEach(x => console.log(x));
    }

    protected shouldNotBeInherited:string = "boo";
}

let catalog = new ShortHandCatalog(["iPhone","Windows"]);
catalog.listAll();

//Inheritance, syntax stolen from java
class DownloadableProduct extends ShortHandCatalog{
    constructor(products: Array<string>, private lengthInPages:number){
        super(products);
    }

    listAll(){
        super.listAll();
        console.log("Overridden function");
    }

}

let downloadableCatalog = new DownloadableProduct(["dave","bob"],1);
downloadableCatalog.listAll();

//Can't be inherited!
//console.log(downloadableCatalog.shouldNotBeInherited);

let yetAnotherCatalog = {
    name: "Phone",
    phones: ["iPhone","Pixel"],
    listPhones: function(){
        // Need to use this so you can access the 'this' variable from this level even when you're inside another
        // function. This is a javascript quirk rather than typescript specific.
        // let self = this;

        // If you use an arrow function you dont need to do this because it doesn't declare a new LHS.
        this.phones.forEach(x => console.log(`${this.name} is ${x}`));
    }
};

yetAnotherCatalog.listPhones();

// Interface is a more fully featured version of type. Only really use interfaces. They can have functions.
interface IProduct{
    id?: number;
    model?: string;
}

//Define the input type as an Interface.
function getProductModel(product: IProduct){
    console.log(product.model);
}

//You can pass anything that fulfills the interface
getProductModel({id:1,model:"iPhone"});

// unit testing quality code, not production.
let product = <IProduct>{};
product.id = 123;
product.model = "dave";
getProductModel(product);

class Product2 implements IProduct {
    id: number;
    model: string;
    constructor(id: number, model:string){
        //Note this mistake.
        this.id = null;
        this.model = model;
    }
}

let product2 = new Product2(1,"bob");
getProductModel(product2);

// Declare the type of the function
let getFullName: (first: string, last: string) => string;

//Implement the function. Have to match the declaration when called.
getFullName = function(first,last){
    return `Full name: ${first} ${last}`;
};

console.log(getFullName("Daniel","Bass"));

let divide: (n:number, d:number) => number
    = function(n,d){
        if(d===0){
            return 0;
        } else {
            return n/d;
        }
};

console.log(divide(9,3));

//Different way of typing the function using an interface
interface IDivide {
    (n:number, d:number): number;
}

let iDivide : IDivide;
iDivide = function(n,d) {
    if (d === 0) {
        return 0;
    } else {
        return n / d;
    }
};
console.log(iDivide(4,2));

class Repository<T>{
    private width: number;
    private height: number;
    private rows: T[];

    // Only way you're allowed multipled constructors. Absolutely foul. Your bottom constructor
    // needs to implement the above method declarations. So you need to do a load of type checking to make sure you drop
    // into the right one. Bizarre given javascript
    constructor(array: T[]);
    constructor(width: number, height:number,defaultFill: T);
    constructor(a1,a2?,a3?){
        if(typeof a1 == 'number' && typeof a2 == 'number'){
            console.log(`a1 is ${a1}`);
        } else if (a1 instanceof Array){
            console.log(`Worked ${a1}`);
        } else {
            throw new TypeError("unexpected arguements to constructor");
        }
    }
}

let firstRepo = new Repository<number>(1,2,3);
let secondRepo = new Repository<IProduct>(1,2,<IProduct>{});
// basically do not use multiple constructors. Use it only for dependency injection.

interface IBook {
    title: string;
    bookCost: number;
    tax: number;
    getPrice: ()=> number;
}

class AudioBook implements IBook{
    title: string;
    bookCost: number;
    tax: number;
    getPrice(): number{
        return this.bookCost + this.tax;
    }
    constructor(title:string,bookCost:number,tax:number){
        this.title = title;
        this.bookCost = bookCost;
        this.tax = tax;
    }
}

// Genuinely the title given by the course instructor. Note this is an INTERFACE extending a CLASS. Evil. Pure Evil.
interface DontDoThisEverForDonaldTrumpSake extends AudioBook{
    killMe:string;
}
//Then you can implement that interface -
class SeriouslyHowCanTSAllowThis implements DontDoThisEverForDonaldTrumpSake {
    killMe:string;
    title: string;
    bookCost: number;
    tax: number;
    getPrice(): number{
        return 0;
    }
}

