// 1. Write a function that takes two numbers (a and b) as Sum a and Return the result

const sum = (a, b) => {
  return a + b;
};
console.log(sum(13, 17));

// 2. Write a function that takes a string as an argument. Extract the last 3 characters from the string. Return the result

const text = (textRow) => {
  const last3 = textRow.slice(-3);
  return last3;
};

console.log(text("Lorem"));

// 3. Write a function that takes a number (a) as argument Split a into its individual digits and return them in an array.

const split = (a) => {
  const digits = Array.from(String(a), Number);
  return digits;
};

console.log(split(3141592));

// 4. Write a function that takes an array (a) and a number (n) as arguments It should return the last n elements of a

const func = (a, n) => {
  const last = a.slice(-n);
  return last;
};

console.log(func([13, 15, 17], 2));
