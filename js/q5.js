var data = require('../products.json')
var items = data.items


for (var counter = 0; counter < items.length; counter++){
  var item = items[counter]
  var title = item.product.title
  var brand = item.product.brand
  var author = item.product.author
  
  if (author.name === "eBay" && brand === "Canon") {
    console.log(item)
  }
}
