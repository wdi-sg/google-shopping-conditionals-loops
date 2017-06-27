var data = require('../products.json')

// Deliverables Question 1
var itemCount = 0
for (var i = 0; i<data.items.length; i++) {
  itemCount += 1
}
console.log('There are ' + itemCount + ' products.')

// Deliverables Question 6
for (var i = 0; i < data.items.length; i++) {
  var eachItem = data.items[i];
  var inventories = eachItem.product.inventories[0];
  console.log(eachItem.product.title + ', ' + eachItem.product.brand + ', ' + inventories.price + inventories.currency + ', ' + eachItem.product.images[0].link);
}
