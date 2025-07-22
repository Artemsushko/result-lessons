// const unique = (numbers) => {
//   return numbers.reduce((uniques, n) => {
//     if (!uniques.includes(n)) {
//       uniques.push(n);
//     }
//     return uniques;
//   }, []);
// };

const unique = (nums) => [...new Set(nums)];
console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3]));
