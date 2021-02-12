console.log('Hello');

//alert('Window restarts in 3s');
//Variables
var b = 'Smoothie';
console.log(b);
var number = 987;
console.log(number);

//var age = prompt('How old are you?');
//document.getElementById('someText').innerHTML = age;
var num1 = 60;
num1++;
console.log(num1);
num1 += 20;
console.log(num1);
/*functions
1.create a function
2.call it.
*/
// create a function that says hello followed by your name
function greeting() {
    var name = prompt('What is your name');
    var result = 'Hello' + ' ' + name;
    console.log(result);
}
//greeting();
//How do arguments work in a function
function sumNumbers(num1, num2) {
    var result = num1 + num2;
    console.log(num1 + num2);
}
sumNumbers('10', '20');
/*while loops
var num = 0;
while (num < 100) {
    num += 1;
    console.log(num);
}
*/
//for loop
for (i = 0; i <= 10; i++) {
    console.log(i);
}
//Strings
let fruit = 'watermelon,apple,orange';
console.log(fruit.length);
console.log(fruit.indexOf('rme'));
console.log(fruit.slice(5, 10));
console.log(fruit.replace('water', 12345));
console.log(fruit.toUpperCase());
console.log(fruit.toLowerCase());
console.log(fruit.charAt(6));
console.log(fruit.split(',')); //split by comma
//Array
let fruits = ['banana', 'apple', 'orange', 'pineapples'];
fruits = new Array('banana', 'apple', 'orange', 'pineapples');

console.log(fruits[2]);
fruits[0] = 'pear';
console.log(fruits);
//array common methods
console.log('to String', fruits.toString());
console.log(fruits.join('*'));
console.log(fruits.pop(), fruits);
console.log(fruits.push('blackberries'), fruits); //appends
console.log(fruits[4]);
fruits[fruits.length] = 'new fruit'; //same as push
console.log(fruits);
fruits.shift(); //removes first element from an array
console.log(fruits);
fruits.unshift('kiwi'); //adds first element to an array
console.log(fruits);

let vegetables = ['asparagus', 'tomato', 'broccoli'];
let allGroceries = fruits.concat(vegetables); //combines arrays
console.log(allGroceries);
console.log(allGroceries.slice(1, 4));
console.log(allGroceries.reverse());
console.log(allGroceries.sort());

let someNumbers = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
console.log(someNumbers.sort(function(a, b) { return a - b })); //sorted in ascending order

let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}
console.log(emptyArray);
//Objects in JS
let student = {
    first: 'Valerie',
    last: 'Moraa',
    age: 20,
    height: 160,
    studentInfo: function() {
        return this.first + '\t' + this.last + '\t' + this.age + '\t' + this.height;
    }
};
console.log(student.age);
console.log(student.studentInfo());
//Conditionals.control flows(if else)
//18-35 as a target demographic
var age = 50;

if ((age >= 18) && (age <= 35)) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}
//Switch statements
//diff btwn weekday and weekend
//day 0-->sunday
//day 6-->saturday
//day 4-->thur-->weekday
switch (6) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;
    default:
        text = 'weekday';

}
console.log(text);