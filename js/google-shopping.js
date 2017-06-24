var data = require('../products.json')

// Write your solutions below
// console.log(data.items)
var items = data.items

// 1.  Print the count of these results. Where else is this count information stored in the search results?
var itemCount = 0

for (var i = 0; i < items.length; i++) {
  itemCount += 1
}

// console.log('there are ' + itemCount + ' products')

// 2. Print the title of all items with a backorder availability in inventories

// loop through all the items again
for (var j = 0; j < items.length; j++) {
  var eachItem = items[j]
  var inventories = eachItem.product.inventories[0]
  // console.log(inventories)
  if (inventories.availability === 'backorder') {
    // console.log(eachItem.product.brand + ' is available for backorder')
  }
}

// 1.) getItems(objectData)
//
// input: json object
// returns: an array of items
// Create a function called getItems that simply returns the items array from the google product object.
//
// Note all other functions (below) use the return of this function as their input.

function getItems () {
  // console.log(data.items)
  return data.items
}
// getItems()
var items = getItems() //to make it a global variable
// console.log(items)

// 2.) getItemsByBrand(items, brand)
//
// input: an array of items, a string of a brand to filter with
// returns: an array of items (of a specific brand)
// Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.
//
// Test this function by searching for Sony, Canon, Nikon and Panasonic.

function getItemsByBrand (items, searchBrand) {
  var arrBrand = []
  for (var k = 0; k < items.length; k++) {
    var brand = items[k].product.brand
    if (searchBrand === brand) {
      arrBrand.push(items[k].product.title)
    }
  }
  // console.log(arrBrand)
  return arrBrand
}
getItemsByBrand(items, 'Sony')

// 3.) getItemsByAuthor(items, author)
//
// input: an array of items, a string of an author to filter with
// returns: an array of items (of a specific author)
// Create a function called getItemsByAuthor that takes an item array and returns a new array of all items by a specified author.
//
// Test this function by searching for Target, CDW, eBay

function getItemsByAuthor (items, searchAuthor) {
  var arrAuthor = []
  for (var x = 0; x < items.length; x++) {
    var author = items[x].product.author.name
    for (var y = 0; y <= searchAuthor.length; y++) {
      if (author.substring(0, y) === searchAuthor) {
        // to extract only 'eBay' out from 'eBay - blah' to be used for comparison with searchAuthor
        arrAuthor.push(items[x].product.title)
      }
    }
  }
  // console.log(arrAuthor)
  return arrAuthor
}
getItemsByAuthor(items, 'eBay')
