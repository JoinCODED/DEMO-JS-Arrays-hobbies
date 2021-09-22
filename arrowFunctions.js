/**
 * 1. Write the function makeDoctor, that takes a name,
 *    and returns `Dr.{Name}`
 *   makeDoctor("Omar") -> Dr.Omar
 */
function makeDoctor(name) {
  return `Dr.${name}`;
}

/**
 * 2. Write the above function using arrow function
 */

const makeKash5aDoctor = (name) => {
  return `Dr.${name}`;
};

/**
 * 3. Write the above function without the brackets
 */

const makeSuperKash5aDoctor = (name) => `Dr.${name}`;

// console.log(makeSuperKash5aDoctor("Omar"));
// console.log(makeSuperKash5aDoctor("Zainab"));
// console.log(makeSuperKash5aDoctor("Sayed"));

/** Iteration methods
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

/** forEach
 * 4. Write a function printArray that takes and array, and prints every single element of an array
 * starting with `# `
 */

const printArray = (array) => {
  const forEachOutput = array.forEach((element) => {
    // the function that is going ot be exectuted for each elemnt
    if (element < 10) {
      console.log(`(${element})`);
    }
  });

  console.log("For each output", forEachOutput);
};

// printArray([5, 4, 3, 8, 19, 21, 8, -4]);

/** filter
 * Write a function that takes an array and a number, and it should return
 * all elements greater than n
 */

const filterAboveN = (array, n) =>
  array.filter((element) => {
    return element <= n;
  });

const array = [5, 4, 3, 8, 19, 21, 8, -4];
console.log(filterAboveN(array, 10));
console.log(array);
/** Map
 * Write curveUp function that takes grades array, and number n,
 * and it curves the grades up by the number n
 */

const curveUp = (array, n) => {
  const newArray = array.map((element) => {
    return element + n;
  });

  console.log(newArray);
};

curveUp(array, 4);
