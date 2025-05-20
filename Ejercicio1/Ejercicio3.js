function isBalanced(text) {
  // your code here
  let contador = 0;
  for (let i = 0; i < text.length; i++) {
    if (text.charAt(i) === '(') {
      contador++;
    } else if (text.charAt(i) === ')') {
      contador--;
      if (contador < 0) return false;
    }
  }

  return (contador === 0);
}


console.log(isBalanced("(())"))   // true
console.log(isBalanced("(()"))   // false
console.log(isBalanced(")()("))   // false
console.log(isBalanced(""))   // true
console.log(isBalanced("((()))"))   // true
