let y = 2026;
if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
  console.log(`Leap year`);
} else {
  console.log(`Not a leap year`);
}
