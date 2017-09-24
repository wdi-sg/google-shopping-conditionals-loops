var data = require('../products.json')
var items = data.items //items is array

// var firstItem = items[0];
// var secondItem = items[1];

// vra obj = {
//   a: '123'
// }

// console.log(firstItem.product.title););
// console.log(secondItem.product.title);
//
for( var counter = 0; counter < items.length; counter++) {
  var item = items[counter]; //create variable to store array inside of data
  var availability = item.product.inventories[0].availability

  if (availability === 'backorder') {
    console.log(item.product.title, availability)
  }
}
