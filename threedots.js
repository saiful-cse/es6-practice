const ar1 = [10, 20, 30, 40, 50];
const ar2 = [60, 70, 80, 90, 100];
const ar3 = [110, 120, 130, 140, 150];

const allArray = ar1.concat(ar2).concat(ar3);
const allArray2 = [...ar1, ...ar2, ...ar3];
//console.log(allArray2);

const a = 100;
const b = 200;
const c = 300;
const maximum = Math.max(a,b,c);
const number = [100, 200, 300];
const maximumNumber = Math.max(...number);
console.log(maximumNumber);
