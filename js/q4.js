var data = require('../products.json');
var items = data.items


for (var i = 0; i < items.length; i++) {
  if (items[i].product.brand.indexOf('Canon') !== -1) {
    console.log(items[i].product.title)
  }

}
