function decode(message) {
  // Pila para almacenar los caracteres
  let stack = [];

  for (let char of message) {
    if (char === ")") {
      // Cuando encontramos un paréntesis de cierre, invertimos los caracteres hasta el último paréntesis de apertura
      let temp = [];
      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        temp.push(stack.pop());
      }
      // Quitamos el paréntesis de apertura
      stack.pop();

      // Agregamos los caracteres invertidos de vuelta a la pila
      for (let reversedChar of temp) {
        stack.push(reversedChar);
      }
    } else {
      // Si no es un paréntesis de cierre, simplemente agregamos el carácter a la pila
      stack.push(char);
    }
  }

  // Convertimos la pila de vuelta a una cadena
  return stack.join("");
}

// Pruebas
const a = decode("hola (odnum)");
console.log(a); // hola mundo

const b = decode("(olleh) (dlrow)!");
console.log(b); // hello world!

const c = decode("sa(u(cla)atn)s");
console.log(c); // santaclaus
