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
        var self = this;
        this.phones.forEach(function (x) { return console.log(self.name + " is " + x); });
    }
};
yetAnotherCatalog.listPhones();
