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
