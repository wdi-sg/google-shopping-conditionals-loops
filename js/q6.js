var data = require('../products.json')
var items = data.items;
var listProducts = [];

for( var counter = 0; counter < items.length; counter++) {
  var item = items[counter]; //create variable to store array inside of data
  var images = item.product.images
  var prices = item.product.inventories[0].price
  var brand = item.product.brand

  listProducts.push(brand,prices,images[0])
  console.log(listProducts)

  }
