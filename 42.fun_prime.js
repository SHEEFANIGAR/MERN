let isprime = function (num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};
console.log(isprime(60));
console.log(isprime(17));
