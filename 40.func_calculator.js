function cal(a, b, op) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    case "%":
      return a % b;
    case "**":
      return a ** b;
    default:
      return "invalid operator";
  }
}
console.log(cal(5, 9, "+"));
console.log(cal(5, 9, "-"));
console.log(cal(5, 9, "*"));
console.log(cal(5, 9, "/"));
console.log(cal(5, 9, "%"));
console.log(cal(5, 9, "**"));
