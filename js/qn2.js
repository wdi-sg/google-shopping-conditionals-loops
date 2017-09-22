var data = require ('../products.json')

//print all items' title first


var items = data.items
// var firstItem = items[0]

// console.log (firstItem['title'])
//title is within data>items(Array)>products(object - need to have '')>author>'title

for (var counter = 0; counter <items.length; counter ++) {
  var item = items[counter] //the item index changes each time.
  var availability = item.product.inventories[0].availability
  //if the inventories have more than 1 item inside, need to loop again. Here, only got one so the index is 0

  if (availability === 'backorder')
  console.log(item.product.title, availability)
}




// {object} - to access it you use .x use the KEY to open the 'chest' of info
// [array] - each time we access an item within an array, we need to array [number]. Then it will "open" the array.
// arrays are drawers with doors

//title is within data>items(Array)>products(object - need to have '')>author>'title

//console.log(items['products'].title) //this doesnt work
// console.log(items.product.title) // this one also doesnt work
