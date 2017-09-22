var data = require ('../products.json')

//print all items' title first


var items = data.items

//same like before but the condition is - if items have more than one image link
//here they dont say the key - need to find

//they are under products
//it's an array - just need to count how many items are in the array
//no need to open it

for (var counter = 0; counter <items.length; counter ++) {
  var item = items[counter]
  var title = item.product.title //all the products that you have
  var images = item.product.images

  if (images.length > 1) {
    console.log(title)
  }
}
