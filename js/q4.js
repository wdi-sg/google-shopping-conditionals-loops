var data = require('../products.json')

var items = data.items

for (var counter = 0; counter < items.length; counter++) {
  var item = items[counter]
  //console.log(item)
  var title = items[counter].product.title
  var brand = items[counter].product.brand
  //console.log(title)
  //console.log(typeof(title))
  if (brand === 'Canon'){
    console.log(title)
  }

}
