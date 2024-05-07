function isEven(numero) {
  if (numero < 0) {
    return isEven(-numero);
  } else if (numero === 0) {
    return true;
  } else if (numero === 1) {
    return false;
  } else {
    return isEven(numero - 2);
  }
}

console.log(isEven(50)); // true
console.log(isEven(75)); // false
console.log(isEven(-1)); // false
