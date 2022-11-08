'use strict';

// -----------Coding Chanllenge1 -----------------

/* TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
  TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4] */

// const Checkdog = function(dogJulia, dogKate) {
//     const juliaCorrectData = dogJulia;
//     juliaCorrectData.splice(-2);
//     const allDogAges = juliaCorrectData.concat(dogKate);
//     allDogAges.forEach((age, i) => {
//         age > 3 ?
//             console.log(` Dog number ${i + 1} is an adult, and is ${age} years old`) :
//             console.log(`Dog number ${i + 1} is still a puppy`);
//     });
// };
// Checkdog([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

/* ++++++++++++++++++++++CodingChalllenge2 +++++++++++++++++++++++ */
// TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
// TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

// const calcHumanAge = function(ages) {
//     const humanAges = ages.map(age => {
//         return age <= 2 ? age * 2 : age * 4 + 16;
//     });
//     console.log(humanAges);
//     const adults = humanAges.filter(age => age >= 18);
//     console.log(adults);
//     const calcAverageage =
//         adults.reduce((acc, age) => acc + age, 0) / adults.length;
//     return calcAverageage;
// };

// const average1 = calcHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const average2 = calcHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(average1);
// console.log(average2);

/* ++++++++++++++++++  CodingChallenge3 +++++++++++++++++++++ */

const calcHumanAge = ages =>
    ages
    .map(age => (age <= 2 ? age * 2 : age * 4 + 16))
    .filter(age => age >= 18)
    .reduce((acc, age) => acc + age, 0) / ages.length;

const average1 = calcHumanAge([5, 2, 4, 1, 15, 8, 3]);
const average2 = calcHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(average1);
console.log(average2);