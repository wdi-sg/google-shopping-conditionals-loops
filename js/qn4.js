var data = require ('../products.json')

//print all items' title first
//go through the item>product>brand (need to open this)
//if the title> brand has "Cannon"
// print the title of it

var items = data.items


//go through every single item
for (var counter = 0; counter <items.length; counter ++) {
  var item = items[counter]
  var brand = item.product.brand //all the products that you have
  //console.log(brand)
  // var images = item.product.images
  // var availability = item.product.inventories[0].availability
  if (brand === 'Canon') {
    console.log(item.product.title, brand)
  }
}
