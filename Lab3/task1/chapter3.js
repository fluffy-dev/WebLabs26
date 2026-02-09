let user = {
  // an object
  name: "John", // by key "name" store value "John"
  age: 30, // by key "age" store value 30
};
delete user.age;

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
  [fruit]: 5, // the name of the property is taken from the variable fruit
};

alert(bag.apple); // 5 if fruit="apple"

// let obj = {
//   0: "test", // same as "0": "test"
// };

// both alerts access the same property (the number 0 is converted to string "0")
alert(obj["0"]); // test
alert(obj[0]); // test (same property)

// let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 390

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumeric(menu);

// after the call
menu = {
  width: 400,
  height: 600,
  title: "My menu",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == "number") {
      obj[key] *= 2;
    }
  }
}

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

alert(user.ref.name);

function makeUser() {
  return this; // this time there's no object literal
}

alert(makeUser().name); // Error: Cannot read property 'name' of undefined

function makeUser() {
  return {
    name: "John",
    ref() {
      return this;
    },
  };
}

let user = makeUser();

alert(user.ref().name); // John


calculator.read();
alert(calculator.sum());
alert(calculator.mul());

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

function Accumulator(startingValue) {
  this.value = startingValue;

  this.read = function () {
    this.value += +prompt("How much to add?", 0);
  };
}

let accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
alert(accumulator.value);

function Calculator() {
  this.read = function () {
    this.a = +prompt("a?", 0);
    this.b = +prompt("b?", 0);
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };
}

let calculator = new Calculator();
calculator.read();

alert("Sum=" + calculator.sum());
alert("Mul=" + calculator.mul());


let obj = {
    toString() {
      return "2";
    }
  };
  
  alert(obj * 2); /