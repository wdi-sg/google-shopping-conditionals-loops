//print title of items with more than 1 image link

var data = require('../products.json');

// Write your solutions below
var count = 0
for (var i=0; i<data.items.length; i++){
  var product = data.items[i].product
  if(product.images.length>1){
    count ++
    console.log('Item ' + count +' with more than 1 image link: ' + product.title)
  }
}
