var data = require('../products.json')

// Functions Question 3

function getItemsByAuthor(items, author) {
  var itemsByAuthor = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.author.name.includes(author)) {
      itemsByAuthor.push(items[i].product.title)
    }
  }
  return itemsByAuthor
}

// Functions Question 4

function getAvailableProducts(items) {
  var availableProducts = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.inventories[0].availability === "inStock") {
    availableProducts.push(items[i].product.title)
    }
  }
  return availableProducts
}
