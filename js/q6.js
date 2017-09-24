var data = require('../products.json')
var items = data.items


for (var counter = 0; counter < items.length; counter++){
  var item = items[counter]
  var title = item.product.title
  var brand = item.product.brand
  var imageLink = item.product.images[0].link
  var price = item.product.inventories[0].price

  console.log(title, brand, price, imageLink)
}
