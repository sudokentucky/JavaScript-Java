function uniqueNames(names) {
  // your code here
  const unicos = new Set(names);
  return [...unicos];
}

console.log(uniqueNames(["Ana", "Luis", "Ana", "Pedro"])); 
// Output: ["Ana", "Luis", "Pedro"]

console.log(uniqueNames(["Mario", "Mario", "Mario"]));
// Output: ["Mario"]
