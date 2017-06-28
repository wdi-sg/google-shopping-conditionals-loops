var data = require('../products.json')

for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.brand === 'Canon') {
    console.log(data.items[i].product.title)
  }
}
