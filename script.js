// Fizz Buzz - Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.
const container = document.querySelector(".container");
let p = document.createElement('p');
container.appendChild(p);

for (let i = 1; i <= 100; i += 1) {
  const multiple3 = i / 3;
  const multiple5 = i / 5;
  if (Number.isInteger(multiple3) || Number.isInteger(multiple5)) {
    while (Number.isInteger(multiple3)) {
      p.innerHTML += "Fizz";
      break;
    }
    while (Number.isInteger(multiple5)) {
      p.innerHTML += "Buzz";
      break;
    }

  } else {
      p.innerHTML += i;
  }
  p.innerHTML += "<br>";
}
