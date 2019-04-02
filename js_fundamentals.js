//Exercise 1
//1.1 = 10
console.log(7 + 3);
// 1.2 = 1
console.log(9 % 2);
// 1.3 = number
console.log(typeof 42);
// 1.4 = true
console.log(typeof 2 === typeof 9.24);
// 1.5 = Infinity
console.log(42 / 0);
// 1.6 = NaN
console.log(9 / "player1");
// 1.7 = false
console.log(NaN === NaN);
// 1.8 = number
console.log(typeof NaN);
// 1.9 = number
console.log(typeof (parseInt("42")));
// 1.10 = BrendanEich
console.log("Brendan" + "Eich");
// 1.11 = Brendan Eich
var firstName = "Brendan";
var lastName = "Eich";
console.log(firstName + " " + lastName);
// 1.12 = 8
var phoneNumber = "08798976";
console.log(phoneNumber.length);
// 1.13 = true
console.log("Brendan" === "Brendan");
// 1.14 = No
// console.log(var fName);
// if(fName) console.log(`First name is ${fName}`);
// 1.15 Will the following code log anything out? = Yes
var name = "";
if(name) console.log(`First name is ${name}`);

// Exercise 2 = Distinction
var score = 10
switch (score) {
  case 10:
  console.log('Distinction');
  break;
  case 9:
  console.log('Merit');
  break;
  case 8:
  console.log('Pass');
  break
  default:
  console.log('Fail');
}
// ## Exercise 3
var coffees = [
  { type:"Latte", price:2.65 },
  { type:"Cappuccino", price:2.75 },
  { type:"Flat white", price:2.95 },
  { type:"Super-dooper Mocha Deluxe", price:3.79 }
]
for (var coffee of coffees){
  console.log(coffee.type + " cost £" + coffee.price + " each");
}

// ## Exercise 4



var currentPlayer = ['x']
var grid =[['x','x','x'], ['o', null, 'o'], [null, null, null]]
console.log(grid[0][0])

if(
(grid[0][0] && grid[0][1] && grid[0][2] === currentPlayer) ||
(grid[1][0] && grid[1][1] && grid[1][2] === currentPlayer) ||
(grid[2][0] && grid[2][1] && grid[2][2] === currentPlayer) ||
(grid[0][0] && grid[1][0] && grid[2][0] === currentPlayer) ||
(grid[0][1] && grid[1][1] && grid[2][1] === currentPlayer) ||
(grid[0][2] && grid[1][2] && grid[2][2] === currentPlayer) ||
(grid[0][0] && grid[1][1] && grid[2][2] === currentPlayer) ||
(grid[2][0] && grid[1][1] && grid[0][2] === currentPlayer)
)
{console.log("Player " + currentPlayer + " wins!")
} else {console.log("It's a draw!");
}
