var data = require('../products.json');



//Write your solutions below
//Create a function called getItems that simply returns the items array from the google product object.Note all other functions (below) use the return of this function as their input

function getItems(inputData){
  return inputData.items
}

var execute = getItems(data)
console.log(execute)

//functions question 2
// input: an array of items, a string of a brand to filter with
// returns: an array of items (of a specific brand)
// Create a function called getItemsByBrand that takes an item array returns a new array of all items of a specified brand.
//

function getItemsByBrand(data, brand) {
  var itemsByBrand = []
  for (var i = 0; i < data.items.length; i++) {
    if (data.items[i].brand.includes(brand)) {
      itemsByBrand.push(data.items[i].brand)
    }
  }
  return itemsByBrand
}


// Functions Question 3

function getItemsByAuthor(data, author) {
  var itemsByAuthor = []
  for (var i = 0; i < data.items.length; i++) {
    if (data.items[i].product.author.name.includes(author)) {
      itemsByAuthor.push(data.items[i].product.title)
    }
  }
  return itemsByAuthor
}

// Functions Question 4

function getAvailableProducts(data) {
  var availableProducts = []
  for (var i = 0; i < data.items.length; i++) {
    if (data.items[i].product.inventories[0].availability === "inStock") {
    availableProducts.push(data.items[i].product.title)
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
getItemsByBrand(data, 'Sony')
getAvailableProducts(getItemsByBrand(data, 'Sony'))
getAvailableProducts(getItemsByAuthor(data, 'Adorama Camera'))
getItemsByBrand(getItemsByAuthor(data, 'eBay'), 'Nikon')
