var data = require('../products.json')
var items = data.items

var numberCount = 0
for (var count = 0 ; count < items.length ; count++) {
  if(items[count].kind === 'shopping#product') {
    numberCount +=1
  }
}
console.log(numberCount);
// console.log(numberCount);
//
// var amountOfItems = items.length
// console.log(amountOfItems);
