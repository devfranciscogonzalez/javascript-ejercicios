function encontrarSolucion(objetivo) {
  function encontrar(actual, historial) {
    if (actual === objetivo) {
      return historial;
    } else if (actual > objetivo) {
      return null;
    } else {
      return (
        encontrar(actual + 5, `(${historial} + 5)`) ??
        encontrar(actual * 3, `(${historial} * 3)`)
      );
    }
  }
  return encontrar(1, "1");
}

console.log(encontrarSolucion(13));
