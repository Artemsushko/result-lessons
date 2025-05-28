const userString = prompt('Enter String fot cut').trim();
const startSliceIndex = Number(
  prompt('Enter the index from which you want to start trimming the string')
);
const endSliceIndex = Number(
  prompt('Enter the index from which you want to finish trimming the string')
);

alert(`Result: ${userString.slice(startSliceIndex, endSliceIndex)}`);
