const age = "18";
if (age === 18) console.log("You just become an adult (strict):D");
//  ===(strict) doesn't conver string to number

if (age == 18) console.log("You just become an adult (loose):D");
//==(loose) convert string to number so answer is true and this tyoe coercion

// always use === when compare as clean code

const favourite = Number(prompt("what's your favourite number?"));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 21) {
  console.log(
    "Cool Number"
    // "21" == 21 , "21" become 21 so answe true
  );
} else if (favourite === 23) {
  console.log("Cool Number");
} else {
  console.log("Number is not 21 or 23");
}

if (favourite !== 21) console.log("Why not 21?");
