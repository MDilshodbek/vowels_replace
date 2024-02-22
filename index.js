// Exercise 5

// var str = "Hello World! i just started programming";
// var vowels = ["a", "e", "i", "o", "u"];
// for (let i = 0; i < str.length; i++) {
//   if (vowels.includes(str[i])) {
//     str = str.replaceAll(str[i], "o");
//   }
// }
// console.log(str);

// function test(str) {
//   var vowels = ["a", "e", "i", "o", "u"];
//   for (let i = 0; i < str.length; i++) {
//     if (vowels.includes(str[i])) {
//       str = str.replaceAll(str[i], "o");
//     }
//   }
//   return str;
// }

// console.log(test(str));

// Exercise 6

// var library = {
//   "Law of Succes": {
//     Authore: "Napoleon Hills",
//     Pages: 3000,
//   },
//   "Atomic Habits": {
//     Authore: "James Clear",
//     Pages: 2000,
//   },
//   "Zero to One": {
//     Authore: "Peter Thiel",
//     Pages: 1000,
//   },
// };

// let keys = Object.keys(library);
// function formatted_string(input) {
//   if (library[input]) {
//     console.log(
//       `Book Authore: ${library[input].Authore} Pages: ${library[input].Pages}`
//     );
//   } else console.log("Book not found");
//   return input;
// }

// formatted_string("Law of Succes");

// Exercise 7

// let numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0;

// function sum_numbers(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return sum;
// }

// console.log(sum_numbers(numbers));

// Exercise 8 chatGPT

// let palindrome = "level";

// let isPalindrome = true;

// for (let i = palindrome.length - 1; i >= 0; i--) {
//     let j = palindrome.length - 1 - i;
//      if (palindrome[i] !== palindrome[j]) {
//         isPalindrome = false;
//         break; 
//     }
// }

// if (isPalindrome) {
//     console.log("It is a palindrome.");
// } else {
//     console.log("It is not a palindrome.");
// }



