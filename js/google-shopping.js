var data = require('../products.json')

// Write your solutions below

console.log(data.items)

var items = data.items

// ===========================================================================

// 1.) Go through the `items` and find all results that have `kind` of `shopping#product`. Print the count of these results. Where else is this count information stored in the search results?

var itemCount = 0

for (var i = 0; i < items.length; i++) {
  itemCount += 1
}

console.log('Answer for Question 1 - ' + 'there are ' + itemCount + ' products')
//
// 2.) Print the `title` of all items with a `backorder` availability in `inventories`.

// loop thru all the items again

for (var j = 0; j < items.length; j++) {
  var eachItemJ = items[j]
  var inventories = eachItemJ.product.inventories[0]

  if (inventories.availability === 'backorder') {
    console.log('Answer for Question 2 - ' + eachItemJ.product.brand + ' is available for order')
  }
}

// 3.) Print the `title` of all items with more than one image link.

for (var k = 0; k < items.length; k++) {
  var eachItemK = items[k]
  var images = eachItemK.product.images

  if (images.length > 1) {
    console.log('Answer for Question 3 - ' + 'Item: ' + eachItemK.product.title + ' has more than one image link')
  }
}

// 4.) Print all "Canon" products in the items (careful with case sensitivity).

for (var m = 0; m < items.length; m++) {
  var eachItemM = items[m]
  var brandM = eachItemM.product.brand

  if (brandM === 'Canon') {
    console.log('Answer for Question 4 - ' + 'All Canon Items Listed: ' + eachItemM.product.title)
  }
}

// 5.) Print all `items` that have an author name of "eBay" and are brand "Canon".

for (var n = 0; n < items.length; n++) {
  var eachItemN = items[n]
  var brandN = eachItemN.product.brand
  var author = eachItemN.product.author

  if (brandN === 'Canon' && author.name === 'eBay') {
    console.log('Answer for Question 5 - ' + 'Canon Items by eBay: ' + eachItemN.product.title)
  }
}
