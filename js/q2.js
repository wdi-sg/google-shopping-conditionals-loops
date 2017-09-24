var data = require('../products.json')
var items = data.items
// var firstItem = items[0]
// var secondItem = items[0]
// console.log(firstItem.product.title)
// console.log(secondItem['product']['title'])

for (var search = 0 ; search < items.length ; search++) {
  var item = items[search]
  var availability = item.product.inventories[0].availability
    if(availability === 'backorder') {
      console.log(item.product.title)
    }
}


// for (var counter = 0 ; counter < items.length; counter++) {
//   var item = items[counter]
//   var availability = item.product.inventories[0].availability
//
//   if(availability === 'backorder') {
//     console.log(item.product.title)
//   }
// }
//


//([0]<<for Arrays. .product << accesing objects<<
