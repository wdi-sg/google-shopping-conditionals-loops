var data = require('../products.json');

var counter = 0

for (var i = 0; i < data.items.length; i++) {
  if (data.items[i].kind == "shopping#product") {
    counter = counter + 1
  }
}

console.log('The total number of shopping products is ' + counter)

console.log(data.items[1].kind)
