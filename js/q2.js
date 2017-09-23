var data = require('../products.json')

var items = data.items
var firstItem = items[0]
//console.log(firstItem['product']['title'])

for (var counter = 0; counter < items.length; counter++) {
  var item = items[counter]
  //[0] as it is an array. we want to access the object in the array
  var availability = item.product.inventories[0].availability
  if (availability === 'backorder') {
    console.log(item.product.title, availability)
  }
}
