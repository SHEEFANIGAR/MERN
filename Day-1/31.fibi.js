let n = 8;
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
for (let i = 0; i < n; i++) {
  console.log(fib(i));
}
