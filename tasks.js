// 1. Write a function that takes two numbers (a and b) as Sum a and Return the result

const sum = (a, b) => {
  return a + b;
};

console.log("--------------------------");
console.log("Task 1:", sum(13, 17));
console.log("--------------------------");

// 2. Write a function that takes a string as an argument. Extract the last 3 characters from the string. Return the result

const text = (textRow) => {
  const last3 = textRow.slice(-3);
  return last3;
};

console.log("Task 2:", text("Lorem"));
console.log("--------------------------");

// 3. Write a function that takes a number (a) as argument Split a into its individual digits and return them in an array.

const split = (a) => {
  const digits = Array.from(String(a), Number);
  return digits;
};

console.log("Task 3:", split(3141592));
console.log("--------------------------");

// 4. Write a function that takes an array (a) and a number (n) as arguments It should return the last n elements of a

const func = (a, n) => {
  const last = a.slice(-n);
  return last;
};

console.log("Task 4:", func([13, 15, 17], 2));
console.log("--------------------------");

// 5. Write a function that takes two arrays as arguments Merge both arrays and remove duplicate values Sort the merge result in ascending order Return the resulting array

const arrayFunc = (array1, array2) => {
  const array3 = array1.concat(array2);
  const uniqueChars = [...new Set(array3)];
  uniqueChars.sort();
  return uniqueChars;
};

console.log("Task 5:", arrayFunc([3, 2, 1], [3, 5, 6]));
console.log("--------------------------");

// 6. Write a function that takes an object (a) and a string (b) as argument  Return true if the object has a property with key 'b' Return false otherwise

const objFunc = (a, b) => {
  return b in a;
};

console.log(
  "Task 6:",
  objFunc({ name: "Lauris", age: 23, company: "Accenture" }, "company")
);
console.log("--------------------------");
