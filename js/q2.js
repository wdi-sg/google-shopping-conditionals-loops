var data = require('../products.json')
var items = data.items


for (var counter = 0; counter < items.length; counter++){
  var item = items[counter]
  var availability = item.product.inventories[0].availability
  if (availability === 'backorder'){
  console.log(item.product.title, availability )
  }
}
