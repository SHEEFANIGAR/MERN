let n = 1289;
let temp = n;
rev = 0;
while (n > 0) {
  let dig = n % 10;
  rev = rev * 10 + dig;
  n = Math.floor(n / 10);
}
console.log(rev);
console.log(rev == temp ? "Palindrome" : "Not a palindrome");

