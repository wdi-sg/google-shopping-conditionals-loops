//print title of items with availability:backorder

var data = require('../products.json');

// Write your solutions below


var count = 0


for (var i= 0; i< data.items.length; i++){
  var product = data.items[i].product
  if(product.inventories[0].availability === 'backorder'){
count++
console.log('Item ' + count + ' with availability backorder is ' + product.title + '.')
}
}
