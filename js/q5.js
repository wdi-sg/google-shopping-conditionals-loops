var data = require('../products.json')

var items = data.items

for (var counter = 0; counter < items.length; counter++) {
  var item = items[counter].product
  //console.log(item)
  var title = item.title
  //console.log(title)
  //console.log(typeof(title))
  var brand = item.brand
  var author = item.author.name
  //console.log(author)
  var authorNo = author.search("eBay")

  if (brand === 'Canon' && authorNo>= 0 ) {
    console.log(items[counter])
  }
}
