console.log("Welcome to Javascript");
console.log("Welcome to Javascript");

function sayHello(name) {
  console.log("Welcome ", name);
}

function sumTwoPositive(a, b) {
  //Important: check a and b should be positive
  if (a <= 0 || b <= 0) return -1; // should return -1 instead of null/undefine
  return a + b;
}
