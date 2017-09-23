var data = require('../products.json')

var items = data.items

for (var counter = 0; counter < items.length; counter++) {
  var item = items[counter]
  //console.log(item)
  var title = items[counter].product.title
  //console.log(title)
  var images = item.product.images
  var length = images.length

  //console.log(title + " is " + length)
  if (length > 1){
    console.log(title)
  }

}
