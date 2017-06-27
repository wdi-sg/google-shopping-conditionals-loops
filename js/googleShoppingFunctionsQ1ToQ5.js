var data = require('../products.json');



//Write your solutions below
//Create a function called getItems that simply returns the items array from the google product object.Note all other functions (below) use the return of this function as their input

function getItems(inputData){
  return inputData.items
}

// var execute = getItems(data)
// console.log(execute)

//functions question 2
// input: an array of items, a string of a brand to filter with
// returns: an array of items (of a specific brand)
// Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.
//

function getItemsByBrand(items, brand) {
  var itemsByBrand = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.brand.includes(brand)) {
      itemsByBrand.push(items[i])
    }
  }
  return itemsByBrand
}


// Functions Question 3

function getItemsByAuthor(items, author) {
  var itemsByAuthor = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.author.name.includes(author)) {
      itemsByAuthor.push(items[i])
    }
  }
  return itemsByAuthor
}

// Functions Question 4

function getAvailableProducts(items) {
  var availableProducts = []
  for (var i = 0; i < items.length; i++) {
    if (items[i].product.inventories[0].availability === "inStock") {
    availableProducts.push(items[i])
    }
  }
  return availableProducts
}

// functions question 5
// Use the functions you created in 1 - 5 to ouput (console.log) the following lists of items.
//
// All items made by Sony.
// All items made by Sony that are available.
// All available items by the author "Adorama Camera"
// All items made by Nikon with the author eBay.
console.log(getItemsByBrand(getItems(data), 'Sony'))
console.log(getAvailableProducts(getItemsByBrand(getItems(data), 'Sony')))
console.log(getAvailableProducts(getItemsByAuthor(getItems(data), 'Adorama Camera')))
console.log(getItemsByBrand(getItemsByAuthor(getItems(data), 'eBay'), 'Nikon'))
