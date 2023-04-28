const array1 = [7, 15, 10, 2, 8, 1, 7, 0];
const array2 = [0, 0, 0];

const foo = [...array1]
  .filter((a) => a % 2 === 1)
  .sort()
  .slice(0, 2)
  .map((a) => a + 5)
  .some((a) => a > 15);

const bar =
  array1.concat(array2) === [...array1, ...array2] ||
  array1.reduce((a, b) => a * b, 1) === array2.reduce((a, b) => a + b, 1);

console.log(foo);
console.log(bar);
console.log(array1.concat(array2));
console.log([...array1, ...array2])
console.log(array1.concat(array2) === [...array1, ...array2]);
console.log( array1.reduce((a, b) => a * b, 1));
console.log( array2.reduce((a, b) => a + b, 1));
console.log(array1.reduce((a, b) => a * b, 1) === array2.reduce((a, b) => a + b, 1))
console.log([...array1]
    .filter((a) => a % 2 === 1)
    .sort()
    .slice(0, 2)
    .map((a) => a + 5));