let sentence = "I am sleepy.";
let words = sentence.split("");
let count = 0;
for (let ch of words) {
  if (ch !== " ") {
    count += 1;
  }
}
console.log(words);
console.log(words.length);
console.log(count);
