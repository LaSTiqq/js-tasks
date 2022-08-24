// 2. Write a function that takes a string as an argument. Extract the last 3 characters from the string. Return the result

const text = (textRow) => {
  const last3 = textRow.slice(-3);
  return last3;
};

console.log(text("Lorem"));
