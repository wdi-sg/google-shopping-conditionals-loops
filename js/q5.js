var data = require('../products.json');
var items = data.items


for (var i = 0; i < items.length; i++) {
  if (items[i].product.brand === 'Canon'
  && items[i].product.author.name === 'eBay') {
    console.log(items[i].product.title)
  }
}
