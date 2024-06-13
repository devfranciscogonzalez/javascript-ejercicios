function enteroMasPequeno(nums) {
  if (nums.length === 0) {
    return 1;
  }
  // obtenemos solo los numeros positivos
  const positivos = nums.filter((num) => num > 0);

  // creamos un set para eliminar duplicados
  const setNums = new Set(positivos);

  // Usamos un bucle for para poder retornar un valor
  for (let i = 1; i <= setNums.size + 1; i++) {
    if (!setNums.has(i)) {
      return i;
    }
  }
}

console.log(enteroMasPequeno([1, 2, 3])); // 4
console.log(enteroMasPequeno([3, 4, -1, 1])); // 2
console.log(enteroMasPequeno([7, 8, 9, 11, 12])); // 1
