// Print all "Canon" products in the items (careful with case sensitivity).

var data = require('../products.json');

//Write your solutions below
var count = 0
for (var i=0; i<data.items.length; i++){
  var product = data.items[i].product
  if(product.brand === 'Canon'){
    count ++
    console.log('Canon item ' + count +':' +product.title)
  }
}
