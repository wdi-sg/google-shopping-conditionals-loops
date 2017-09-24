var data = require('../products.json')
var items = data.items;

for( var counter = 0; counter < items.length; counter++) {
  var item = items[counter]; //create variable to store array inside of data
  var authors = item.product.author.name
  var brand = item.product.brand
  //console.log(authors)

  if(authors === 'eBay' &&  brand === 'Canon') {
    console.log(item)
  }
};
