//install node and run npm install -g typescript. Then open in webstorm and say yes when it asks you if you want it to compile to javascript
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Class
var Product = (function () {
    function Product() {
        this.isValid = true;
        console.log(this.isValid);
    }
    return Product;
}());
//Typing
var fullName = "Daniel Bass";
var bob = new Product();
console.log(fullName);
var x;
x = ["bob", 1];
x[0] = "bob";
x[1] = 2;
//enums
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 0] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 1] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 2] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 3] = "Thursday";
    WeekDays[WeekDays["Friday"] = 4] = "Friday";
})(WeekDays || (WeekDays = {}));
var friday = WeekDays.Friday;
var tuesday = WeekDays[1];
//Array destructuring
var list = ['iPhone X', 'Surface Pro', 'Pixel 2', 'bob', 'dave'];
var first = list[0], second = list[1], third = list[2], remaining = list.slice(3);
console.log(first);
console.log(remaining);
//Object destructuring. Allows us to easily create variables to use on their own from properties of an object.
var iphone = {
    quality: "poor",
};
var quality = iphone.quality;
console.log(quality);
function setDefault(employee) {
    //Question mark means nullable.
    // The '=' sign sets a default value
    var empName = employee.empName, _a = employee.companyName, companyName = _a === void 0 ? "Google" : _a;
    console.log(empName);
    console.log(companyName);
}
setDefault({ empName: 'Bass' });
setDefault({ empName: 'Bass', companyName: 'bob' });
function setDefaultValues(_a) {
    var _b = _a === void 0 ? { empName: 'Bass', companyName: 'Cazton' } : _a, empName = _b.empName, companyName = _b.companyName;
    console.log("Employee name is " + empName + " and company name is " + companyName);
    //This is showcasing the destructuring and setting of default values all in the parameters.
}
setDefaultValues();
setDefaultValues({ empName: 'bob', companyName: 'dave' });
//you can use object destructuring on types as well
function getPaycheck(_a) {
    var isFullTime = _a.isFullTime, salary = _a.salary, _b = _a.billRate, billRate = _b === void 0 ? 123 : _b;
    console.log(isFullTime);
    console.log(salary);
    console.log(billRate);
}
getPaycheck({ isFullTime: true, salary: 1234, billRate: 27 });
//Be very careful of private modifiers if you are using webpack. It deletes it and makes it public, well known bug.
var Catalog = (function () {
    //Typescript only allows one constructor.
    function Catalog(list) {
        this.products = list;
    }
    return Catalog;
}());
//Theres a shorthand version. Does not reduce size of compiled javascript
var ShortHandCatalog = (function () {
    function ShortHandCatalog(list) {
        this.list = list;
        this.shouldNotBeInherited = "boo";
    }
    //This is a method returning null that just writes out each element in the list
    ShortHandCatalog.prototype.listAll = function () {
        this.list.forEach(function (x) { return console.log(x); });
    };
    return ShortHandCatalog;
}());
var catalog = new ShortHandCatalog(["iPhone", "Windows"]);
catalog.listAll();
//Inheritance, syntax stolen from java
var DownloadableProduct = (function (_super) {
    __extends(DownloadableProduct, _super);
    function DownloadableProduct(products, lengthInPages) {
        var _this = _super.call(this, products) || this;
        _this.lengthInPages = lengthInPages;
        return _this;
    }
    DownloadableProduct.prototype.listAll = function () {
        _super.prototype.listAll.call(this);
        console.log("Overridden function");
    };
    return DownloadableProduct;
}(ShortHandCatalog));
var downloadableCatalog = new DownloadableProduct(["dave", "bob"], 1);
downloadableCatalog.listAll();
//Can't be inherited!
//console.log(downloadableCatalog.shouldNotBeInherited);
var yetAnotherCatalog = {
    name: "Phone",
    phones: ["iPhone", "Pixel"],
    listPhones: function () {
        // Need to use this so you can access the 'this' variable from this level even when you're inside another
        // function. This is a javascript quirk rather than typescript specific.
        // let self = this;
        var _this = this;
        // If you use an arrow function you dont need to do this because it doesn't declare a new LHS.
        this.phones.forEach(function (x) { return console.log(_this.name + " is " + x); });
    }
};
yetAnotherCatalog.listPhones();
//Define the input type as an Interface.
function getProductModel(product) {
    console.log(product.model);
}
//You can pass anything that fulfills the interface
getProductModel({ id: 1, model: "iPhone" });
// unit testing quality code, not production.
var product = {};
product.id = 123;
product.model = "dave";
getProductModel(product);
var Product2 = (function () {
    function Product2(id, model) {
        //Note this mistake.
        this.id = null;
        this.model = model;
    }
    return Product2;
}());
var product2 = new Product2(1, "bob");
getProductModel(product2);
// Declare the type of the function
var getFullName;
//Implement the function. Have to match the declaration when called.
getFullName = function (first, last) {
    return "Full name: " + first + " " + last;
};
console.log(getFullName("Daniel", "Bass"));
var divide = function (n, d) {
    if (d === 0) {
        return 0;
    }
    else {
        return n / d;
    }
};
console.log(divide(9, 3));
var iDivide;
iDivide = function (n, d) {
    if (d === 0) {
        return 0;
    }
    else {
        return n / d;
    }
};
console.log(iDivide(4, 2));
var Repository = (function () {
    function Repository(a1, a2, a3) {
        if (typeof a1 == 'number' && typeof a2 == 'number') {
            console.log("a1 is " + a1);
        }
        else if (a1 instanceof Array) {
            console.log("Worked " + a1);
        }
        else {
            throw new TypeError("unexpected arguements to constructor");
        }
    }
    return Repository;
}());
var firstRepo = new Repository(1, 2, 3);
var secondRepo = new Repository(1, 2, {});
var AudioBook = (function () {
    function AudioBook(title, bookCost, tax) {
        this.title = title;
        this.bookCost = bookCost;
        this.tax = tax;
    }
    AudioBook.prototype.getPrice = function () {
        return this.bookCost + this.tax;
    };
    return AudioBook;
}());
//Then you can implement that interface -
var SeriouslyHowCanTSAllowThis = (function () {
    function SeriouslyHowCanTSAllowThis() {
    }
    SeriouslyHowCanTSAllowThis.prototype.getPrice = function () {
        return 0;
    };
    return SeriouslyHowCanTSAllowThis;
}());
