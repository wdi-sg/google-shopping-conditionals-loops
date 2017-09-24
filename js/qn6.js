var data = require ('../products.json')

//print all items' title first


var items = data.items

//go through every single item
for (var counter = 0; counter <items.length; counter ++) {
  var item = items[counter]
  var brand = item.product.brand
  var price = item.product.inventories[0].price//all the products that you have
  var imageLink = item.product.link
  //console.log(brand)
  // var images = item.product.images
  // var availability = item.product.inventories[0].availability
    console.log(item.product.title + brand + price + imageLink)
}
