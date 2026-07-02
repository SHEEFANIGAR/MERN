let arr = [1, 2, 3];
arr.push(4);
console.log(arr);

console.log(arr.pop());

arr.shift();
console.log(arr);

arr.unshift(20);
console.log(arr);

console.log(arr.indexOf(3));

console.log(arr.includes(2));

let rev = arr.reverse();
console.log(rev);

arr.sort((a, b) => b - a);
console.log(arr);

arr.splice(1, 2);
console.log(arr);

arr = arr.concat([5, 8, 9]);
console.log(arr);

let joined = arr.join("|");
console.log(joined);

let mapp = arr.map((x) => x * 2);
console.log(mapp);

let fil = arr.filter((x) => x > 8);
console.log(fil);

let x = arr.find((x) => x > 5);
console.log(x);

let sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);
