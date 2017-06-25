//Create a function called getItems that simply returns the items array from the google product object.Note all other functions (below) use the return of this function as their inpu

var data = require('../products.json');



//Write your solutions below

function getItems(inputData){
  return inputData.items
}

var execute = getItems(data)
console.log(execute)
