var data = require('../products.json')

console.log('List of backorder items:')

for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.inventories[0].availability === "backorder") {
    console.log(data.items[i].product.title)
  }
}
