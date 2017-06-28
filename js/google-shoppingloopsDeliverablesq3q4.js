var data = require('../products.json')

// Write your solutions below

// Print the title of all items with more than one image link.

for (var i = 0; i < data.items.length; i++) {
  var imageCount = 0
  for (var j = 0; j < data.items[i].product.images.length; j++) {
      imageCount += 1
  }
  if (imageCount > 1) {
    console.log(data.items[i].product.title)
  }
}

// Print all "Canon" products in the items (careful with case sensitivity).

for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].product.brand === 'Canon') {
    console.log(data.items[i].product.title)
  }
}
