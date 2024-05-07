function revertirCadena(palabra) {
  if (palabra.length === 0) {
    return "";
  } else {
    return revertirCadena(palabra.substring(1)) + palabra.charAt(0);
  }
}
console.log(revertirCadena("freeCodeCamp"));
