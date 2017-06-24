var data = require('../products.json')

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
var items = getItems() // to make it a global variable
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
      arrBrand.push(items[k])
    }
  }
  // console.log(arrBrand)
  return arrBrand
}
// getItemsByBrand(items, 'Sony')

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
        arrAuthor.push(items[x])
      }
    }
  }
  // console.log(arrAuthor)
  return arrAuthor
}
// getItemsByAuthor(items, 'eBay')

// 4.) getAvailableProducts(items)
//
// input: an array of items
// returns: an array of items (that are available)
// Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)

function getAvailableProducts (items) {
  var arrAvail = []
  for (var z = 0; z < items.length; z++) {
    var avail = items[z].product.inventories[0].availability
    if (avail === 'inStock') {
      arrAvail.push(items[z])
    }
  }
  return arrAvail
}
// getAvailableProducts(items)
// console.log(items)
var sonyItems = getItemsByBrand(items, 'Sony')
// console.log(sonyItems)
var sonyAvailable = getAvailableProducts(sonyItems)
// console.log(sonyAvailable)
var adoramaItems = getItemsByAuthor(items, 'Adorama Camera')
// console.log(adoramaItem)
var adoramaAvailable = getAvailableProducts(adoramaItems)
// console.log(adoramaAvailable)
var nikonItems = getItemsByBrand(items, 'Nikon')
// console.log(nikonItems)
var nikonEbay = getItemsByAuthor(nikonItems, 'eBay')
// console.log(nikonEbay)
