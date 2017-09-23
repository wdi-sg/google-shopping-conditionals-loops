var data = require('../products.json')

var items = data.items

for (var counter = 0; counter < items.length; counter++) {
  var item = items[counter].product
  //console.log(item)
  var brand = item.brand
  var price = item.inventories[0].price
  //console.log(price)
  // var image = item.images[0]
  var oneImage = item.images[0].link
console.log (brand + ": " + price + ": " + oneImage)

}
