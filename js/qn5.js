var data = require ('../products.json')

//print all items' title first


var items = data.items

//go through every single item
for (var counter = 0; counter <items.length; counter ++) {
  //go through the item>product>brand (need to open this)
  //if the title> brand has "Cannon"
  // print the title of it
  var item = items[counter]
  var title = item.product.title //all the products that you have
  // var images = item.product.images
  // var availability = item.product.inventories[0].availability
}
