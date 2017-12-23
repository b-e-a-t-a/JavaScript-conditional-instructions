// 1.
var a = 5,
  b = 5;

var  value = (a * a) - (2 * a * b) + (b * b);

console.log('Value is equal: ' + value);


var valueMore = value > 0  ? 'wynik dodatni' : 'wynik ujemny';
console.log(valueMore);

// 2. 
var  value = (a * a) - (2 * a * b) + (b * b);

if (value == 0) {
  console.log('wartosc rowna zero');

} else if (value > 0) {
  console.log('wynik dodatni');

} else {
  console.log('wynik ujemny')
;
}