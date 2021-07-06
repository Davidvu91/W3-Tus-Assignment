const programmers = [
    "Dennis Ritchie",
    "Brian Kernighan",
    "Ken Thompson",
    "Linus Torvalds",
    "Bjarne Stroustrup",
    "Tim Berners-Lee",
    "Donald Knuth",
    "Alan Turing",
    "Mark Zuckerberg",
    "Bill Gates",
    "Larry Page",
    "Elon Musk",
    "Jack Dorsey",
    "Satoshi Nakamoto",
    "Ada Lovelace",
    "Grace Hopper",
    "Dan Ambramov",
    "Jordan Walke",
    "Ryan Dahl",
    "David Heinemeier Hansson",
    "Guido van Rossum",
    "Yukihiro Matsumoto",
    "Sergey Brin",
    "Lyndsey Scott",
    "Abhinav Asthana", 
    "Abhijit Kane", 
    "Ankit Sobti",
    "Loi Tran",
    "Charles Lee",
    "Tuan Nguyen",
    "Tan Vo",
  ];

//   Use for loop to:

//   Review the first name of each programmer.
//   Review the last name of each programmer.
//   Review the sum char length of the first name of each programmer.
//   Review the sum char length of the last name of each programmer.
//   Review the sum char length of all the programmers.

//3.1 

// for (var i = 0; i < programmers.length; i++) {
//     var haha = programmers[i].split(" ");

//     console.log(haha[0])
// };

//3.2 

// for (var i = 0; i < programmers.length; i++) {
//     var haha = programmers[i].split(" ");

//     console.log(haha[haha.length-1])
// };

//3.3 

// for (var i = 0; i < programmers.length; i++) {
//     var haha = programmers[i].split(" ");
//     // console.log(haha);
//     var hihi = haha[0];
//     // console.log(hihi)
//     var hoho = hihi.split("");
//     // console.log(hoho);
//     var sum = hoho.length 
//     // console.log(sum)
// };

// 3.4 

// for (var i = 0; i < programmers.length; i++) {
//     var haha = programmers[i].split(" ");
//     var hihi = haha[haha.length - 1];
//     // console.log(hihi)
//     var hoho = hihi.split("");
//     // console.log(hoho);
//     var sum = hoho.length;
//     // console.log(sum);
// } 
  
// 3.5

// for (var i = 0; i < programmers.length; i++) {
//     var haha = programmers[i].split("");
//     // console.log(haha);
//     var sum = haha.length;
//     // console.log(sum)
// };

// Use sort() to:

// Mutate programmers such that it's in alphabetical order of the first name of the programmers, A-Z.
// Mutate programmers such that it's in alphabetical order of the last name of the programmers, A-Z.
// Mutate programmers such that it's sorted by length of first name, shortest to longest.
// Mutate programmers such that it's sorted by length of last name, shortest to longest.

//3.5 
 
// let alphaOder = programmers.sort();
// console.log(alphaOder);

//3.6




//--------------------------------------------------------------------------------------------------

// Use filter() to:

// Find all programmers whose first name starts with L.
// Find all programmers whose last name starts with T.
// Find all programmers where the first name's length is less than 4 characters.
// Find all programmers where the first name's length is greater than 4 characters.
// Find all programmers where the sum of the length of their name's characters is greater than 8.
// Find all programmers where the sum of the length of their name's characters is less than 8.
// Find all programmers where the last name begins with the letter K and ends with the letter n.
// Find all programmers whose first name is 3 characters long exactly.
// Find all programmers whose first name starts with ‘A'.
// Find all programmers whose first & last name start with the same character, for example, Abhinav Asthana.

//3.10 
