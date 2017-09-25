var data = require('../products.json');
var items = data.items


for (var i = 0; i < items.length; i++) {
  console.log(items[i].product.brand)
  console.log(items[i].product.inventories[0].price)
  console.log(items[i].product.images)
}


// what is Json.
