var data = require('../products.json')

var items = data.items
//var amountOfItems = items.itemsPerPage another way to get the number of items
var amountOfItems = items.length
console.log("There are " + amountOfItems + " items")
var itemsPerPage = data.itemsPerPage
console.log("The items per page is " + itemsPerPage)
