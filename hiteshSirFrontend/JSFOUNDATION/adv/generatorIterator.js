function* numberGeneretor() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}
let gen = numberGeneretor();
let genTwo = numberGeneretor();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value); // undefined

console.log(genTwo.next().value);
console.log(genTwo.next().value);
console.log(genTwo.next().value);
