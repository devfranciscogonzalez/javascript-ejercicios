const original = "abcd";
const modified = "abcde";
findNaughtyStep(original, modified); // 'e'
findNaughtyStepTwo(original, modified);
// const original = 'stepfor'
// const modified = 'stepor'
// findNaughtyStep(original, modified) // 'f'

// const original = 'abcde'
// const modified = 'abcde'
// findNaughtyStep(original, modified) // ''

function findNaughtyStep(original, modified) {
  const l = original.length < modified.length ? modified : original;

  for (let i = 0; i < l.length; i++) {
    if (original[i] !== modified[i]) {
      return l[i];
    }
  }
  return "";
}