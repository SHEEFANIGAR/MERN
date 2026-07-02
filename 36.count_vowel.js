let vowels = "aeiouAEIOU";
let str = "hello";
let count = 0;
for (let ch of str) {
  if (vowels.includes(ch)) {
    count += 1;
  }
}
console.log(count);
