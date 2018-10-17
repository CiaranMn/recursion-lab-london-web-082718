function printString(string) {
  if (string.length <= 0) return;
  console.log(string[0]);
  printString(string.slice(1,string.length));
}

function reverseString(string) {
  if (string.length === 1) {return string}
  return reverseString(string.slice(1)) + string[0]
}

