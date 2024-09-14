function decode(message) {
  let stack = [];

  for (a of message) {
    if (a === ")") {
      let temp = [];

      while (stack.length > 0 && stack[stack.length - 1] !== "(") {
        temp.push(stack.pop);
      }
    } else {
      stack.push(a);
    }
  }
  return "hola";
}
const c = decode("sa(u(cla)atn)s");
console.log(c);
