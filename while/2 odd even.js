/***
Subtask-1:
Find all the odd numbers from 61 to 100.
/***
Subtask-2:
Find all the even numbers from 78 to 98.
 */
/*programming hero*/
console.log("Odd numbers");
let odd = 61;
while (odd <= 100) {
  if (odd % 2 !== 0) {
    console.log(odd);
  }
  odd++;
}
console.log("==================");
console.log("Even numbers");
let even = 78;
while (even <= 98) {
  if (even % 2 === 0) {
    console.log(even);
  }
  even++;
}
