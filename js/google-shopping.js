var data = require('../products.json')

// Write your solutions below
// console.log(data.items)
var items = data.items

// GOOGLE SHOPPING CONDITIONAL LOOPS
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

// 3.) Print the title of all items with more than one image link.

var moreThan2Images = []

for (var k = 0; k < items.length; k++) {
  var imagesNumber = items[k].product.images
  if (imagesNumber.length > 1) {
    moreThan2Images.push(items[k].product.title)
  }
}
console.log(moreThan2Images)

// 4.) Print all "Canon" products in the items (careful with case sensitivity).

var productCanon = []

for (var x = 0; x < items.length; x++) {
  var productBrand = items[x].product.brand
  if (productBrand === 'Canon') {
    productCanon.push(items[x].product.title)
  }
}
console.log(productCanon)

// 5.) Print all items that have an author name of "eBay" and are brand "Canon".

var ebayCanon = []
for (var y = 0; y < items.length; y++) {
  if (items[y].product.author.name.substring(0, 4) === 'eBay' && items[y].product.brand === 'Canon') {
    ebayCanon.push(items[y].product.title)
  }
}
console.log(ebayCanon)

// 6.) Print all the products with their brand, price, and an image link

var brandPriceImageLink = []

for (var z = 0; z < items.length; z++) {
  console.log(items[z].product.title + ' is made by ' + items[z].product.brand + '. Its price is ' + items[z].product.inventories[0].price + '. You can see it from ' + items[z].product.images)
}

// GOOGLE SHOPPING FUNCTIONS
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

// 4.) getAvailableProducts(items)
//
// input: an array of items
// returns: an array of items (that are available)
// Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)

function getAvailableProducts (items) {
  var itemsInStock = []
  for (var m = 0; m < items.length; m++) {
    var isAvail = items[m].product.inventories[0].availability
    if (isAvail === 'inStock') {
      itemsInStock.push(items[i].product.title)
    }
  } return itemsInStock
}

// 5.) Use your functions
//
// Use the functions you created in 1 - 5 to ouput (console.log) the following lists of items.
//
// a. All items made by Sony.
var sonyItems = getItemsByBrand(items, 'Sony')
// console.log(sonyItems)
// b. All items made by Sony that are available.
var sonyAvailable = getAvailableProducts(sonyItems)
// console.log(sonyAvailable)
// c. All available items by the author "Adorama Camera"
var adoramaCamera = getItemsByAuthor(items, 'Adorama Camera')
var adoramaAvailable = getAvailableProducts(adoramaCamera)
// console.log(adoramaAvailable)
// d. All items made by Nikon with the author eBay.
var ebay = getItemsByAuthor(items, 'eBay')
var eBayNikon = getItemsByBrand(ebay, 'Nikon')
// console.log(eBayNikon)
// Bonus
//
// Create another search function and/or think of other interesting ways to combine the functions to perform useful searches.
