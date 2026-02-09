// Chapter 1 Placeholder
let admin, name; // can declare two variables at once

name = "John";

admin = name;

alert(admin); // "John"

// the expression is a number 1
alert(`hello ${1}`); // hello 1

// the expression is a string "name"
alert(`hello ${"name"}`); // hello name

// the expression is a variable, embed it
alert(`hello ${name}`); // hello Ilya

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(+a + +b); // 3

// 5 > 4 → true
// "apple" > "pineapple" → false
// "2" > "12" → true
// undefined == null → true
// undefined === null → false
// null == "\n0\n" → false
// null === +"\n0\n" → false

let message =
  login == "Employee"
    ? "Hello"
    : login == "Director"
      ? "Greetings"
      : login == ""
        ? "No login"
        : "";

// Runs.
// The result of -1 || 0 = -1, truthy
if (-1 || 0) alert("first");

// Doesn't run
// -1 && 0 = 0, falsy
if (-1 && 0) alert("second");

// Executes
// Operator && has a higher precedence than ||
// so -1 && 1 executes first, giving us the chain:
// null || -1 && 1  ->  null || 1  ->  1
if (null || (-1 && 1)) alert("third");

let userName = prompt("Who's there?", "");

if (userName === "Admin") {
  let pass = prompt("Password?", "");

  if (pass === "TheMaster") {
    alert("Welcome!");
  } else if (pass === "" || pass === null) {
    alert("Canceled");
  } else {
    alert("Wrong password");
  }
} else if (userName === "" || userName === null) {
  alert("Canceled");
} else {
  alert("I don't know you");
}

let i = 3;

alert(i--); // shows 3, decreases i to 2

alert(i--); // shows 2, decreases i to 1

alert(i--); // shows 1, decreases i to 0

// done, while(i) check stops the loop

// let i = 0;
while (i < 3) {
  alert(`number ${i}!`);
  i++;
}

let num;

do {
  num = prompt("Enter a number greater than 100?", 0);
} while (num <= 100 && num);

// let a = +prompt("a?", "");

switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert("2,3");
    break;
}

function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
  alert(`Power ${n} is not supported, use a positive integer`);
} else {
  alert(pow(x, n));
}

let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {
  welcome = function () {
    alert("Hello!");
  };
} else {
  welcome = function () {
    alert("Greetings!");
  };
}

welcome(); // ok now

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution."),
);

// let age = prompt("Your age?", 18);

switch (age) {
  case 18:
    alert("Won't work"); // the result of prompt is a string, not a number
    break;

  case "18":
    alert("This works!");
    break;

  default:
    alert("Any value not equal to one above");
}



// expression on the right side
// let sum = (a, b) => a + b;

// or multi-line syntax with { ... }, need return here:
let sum = (a, b) => {
  // ...
  return a + b;
}

// without arguments
let sayHi = () => alert("Hello");

// with a single argument
let double = n => n * 2; 