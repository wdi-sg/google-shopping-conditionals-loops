var data = require('../products.json')

// Q1-5 (wanzheng)
var itemArr = []

function getItems (data) {
  data.items.map(function (e) {
    itemArr.push(e)
  })
  return itemArr
  // console.log(itemArr)
}

function getItemsByBrand (items, brandToMatch) {
  var itemsByBrand = []
  items.map(function (e) {
    var brand = e.product.brand
    if (brand == brandToMatch) { itemsByBrand.push(e) }
  })
  return itemsByBrand
  // console.log(itemsByBrand)
}

function getItemsByAuthor (items, authorToMatch) {
  var itemsByAuthor = []
  items.map(function (e) {
    var author = e.product.author.name
    if (author == authorToMatch) { itemsByAuthor.push(e) }
  })
  return itemsByAuthor
  // console.log(itemsByAuthor)
}

function getAvailableProduct (items) {
  var availItems = []
  items.map(function (e) {
    var stock = e.product.inventories[0].availability
    if (stock == 'inStock') { availItems.push(e) }
  })
  return availItems
  // console.log(availItems)
}

// All items made by Sony.
// var itemsBySony = getItemsByBrand(getItems(data), 'Sony')
// console.log(itemsBySony)

// All items made by Sony that are available.
// console.log(getAvailableProduct(itemsBySony))

// All available items by the author "Adorama Camera"
// console.log(getItemsByAuthor(getItems(data), 'Adorama Camera'))

// All items made by Nikon with the author eBay.
// var itemsByNikon = getItemsByBrand(getItems(data), 'Nikon')
// console.log(getItemsByAuthor(itemsByNikon, 'eBay').length)

// Q6 (michelle)
// 6.) Print all the products with their brand, price, and an image link

var items = data.items    // items is an array of objects

var arrayQ6 = []

for (var n=0; n<items.length; n++) {
    var itemObj = {}
    itemObj.title = items[n].product.title
    itemObj.brand = items[n].product.brand
    itemObj.price = items[n].product.inventories[0].price
    itemObj.imgLink = items[n].product.images[0].link
    arrayQ6.push(itemObj)
}
console.log(arrayQ6)
