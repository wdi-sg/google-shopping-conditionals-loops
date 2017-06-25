// Print all the products with their brand, price, and an image link

var data = require('../products.json');

//console.log(data.items[0].product.author)

console.log(data.items[0].product.inventories[0].price)

//Write your solutions below
var count = 0
for (var i=0; i<data.items.length; i++){
  var product = data.items[i].product
    console.log('Title: ' + product.title + ' |Brand: ' +product.brand + ' |Price: ' +product.inventories[0].price + ' |Image link: ' + product.images[0].link)
  }
