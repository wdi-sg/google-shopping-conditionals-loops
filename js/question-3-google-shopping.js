var data = require('../products.json')

for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.images.length > 1) {
    console.log(data.items[i].product.title)
  }
}

// console.log(data.items[0].product.images)
