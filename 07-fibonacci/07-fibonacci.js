console.log(fibonacciSecuencial(10)); // Salida: 55
console.log(fibonacciRecursivo(10)); // Salida: 55
console.log(fibonacciSecuencialArreglo(10));

// Función para calcular la secuencia de Fibonacci de manera iterativa (secuencial)
function fibonacciSecuencial(num) {
  if (num <= 0) return 0;
  if (num === 1) return 1;

  let a = 0,
    b = 1;
  for (let i = 2; i <= num; i++) {
    let aux = a + b;
    a = b;
    b = aux;
  }
  return b;
}
// Función para calcular la secuencia de Fibonacci de manera iterativa (secuencial) con Arreglo

function fibonacciSecuencialArreglo(num) {
  if (num <= 0) return 0;
  if (num === 1) return 1;

  let fib = [0, 1];
  for (let i = 2; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  console.log(fib);
  return fib[num];
}

// Función para calcular la secuencia de Fibonacci de manera recursiva
function fibonacciRecursivo(num) {
  if (num <= 0) return 0;
  if (num === 1) return 1;
  return fibonacciRecursivo(num - 1) + fibonacciRecursivo(num - 2);
}

0, 1, 1, 2, 3, 5, 8, 13, 21, 34;
