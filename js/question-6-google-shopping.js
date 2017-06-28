var data = require('../products.json')

for (var i = 0; i < data.items.length; i++) {
  console.log('Brand: ' + data.items[i].product.brand)
  console.log('Price: $' + data.items[i].product.inventories[0].price)
  console.log('Link: ' + data.items[i].product.images[0])
  console.log('')
}

// console.log(data.items[0].product.images[0].string[0])
