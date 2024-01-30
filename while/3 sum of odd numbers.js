/***

Subtask-1:
Display sum of all the odd numbers from 81 to 131.
/***
Subtask-2:
Display sum of all the even numbers from 206 to 311.
 */
let oddSum = 0;
let evenSum = 0;
let odd = 81;
let even = 206;
while (odd <= 131) {
  if (odd % 2 !== 0) {
    oddSum += odd;
    // console.log(odd);
  }
  odd++;
}
console.log("Sum of all the odd numbers from 81 to 131 is ", oddSum);

while (even <= 311) {
  if (even % 2 === 0) {
    evenSum += even;
    // console.log(even);
  }
  even++;
}
console.log("Sum of all the even numbers from 206 to 311 is ", evenSum);
