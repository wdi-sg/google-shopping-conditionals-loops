var data = require('../products.json');
var items = data.items

for (var i = 0; i < items.length; i++) {
  if(items[i].product.images.length > 1) {
    console.log(items[i].product.title)
  }
}

// var data = require('../products.json')
// var items = data.items
//
//
// for (var counter = 0 ; counter < items.length; counter++) {
//   var item = items[counter]
//   var title = item.product.title
//   var images = item.product.images
//
//   // console.log(title, images.length)
//   // var availability = item.product.inventories[0].availability
//   //
//   if(images.length > 1) {
//     console.log(title)
//   }
// }
