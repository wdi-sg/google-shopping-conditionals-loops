// Print all items that have an author name of "eBay" and are brand "Canon".

var data = require('../products.json');

//console.log(data.items[0].product.author)

//Write your solutions below
var count = 0
for (var i=0; i<data.items.length; i++){
  var product = data.items[i].product
  if(product.author.name === 'eBay' && product.brand === 'Canon'){
    count ++
    //console.log(count)
    console.log('Item with author name eBay & brand Canon is ' +product.title + '.')
  }
}
