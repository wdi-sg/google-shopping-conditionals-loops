//Create function called getAvailableProducts that takes an item array and returns an array containing all of the available products (an available product is one with at least one availability of "inStock" in the inventories array)

var data = require('../products.json');

//Write your solutions below

function getItems(inputData){
  return inputData.items
}

function getAvailableProducts(inputData){
  var allItems = getItems (inputData)
  var arr = []
  //var count = 0
  for (i = 0 ; i<allItems.length; i++){
    var items = allItems[i]
    var product = items.product
    var inventories = product.inventories[0]
    var availability = inventories.availability
    var price = inventories.price
    if(availability==='inStock'){
    arr.push(product.title)
    }
}
return arr
}

console.log(getAvailableProducts(data))
