const arr = [1, 2, 1, 2, 3];
let seen = new Set();
let duplicates = new Set();
for (let num of arr) {
  if (seen.has(num)) {
    duplicates.add(num);
  } else {
    seen.add(num);
  }
}
console.log(duplicates);
