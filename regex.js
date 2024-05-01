const regex1 = /hello/ig;

// Regex Methods
console.log(regex1.test(str)); // return true or false if matched
console.log(regex1.exec(str)); //

// String method
console.log(str.match(regex1)); // returns array of matches
console.log(str.search(regex1)); // returns the index
console.log(str.replace(regex1, 'Hi')); // find and replace