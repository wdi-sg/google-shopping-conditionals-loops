//print no of items with kid:shopping#product

var data = require('../products.json');

// Write your solutions below


var count = 0

for (var i= 0; i< data.items.length; i++){
  if(data.items[i].kind = 'shopping#product'){
count++
}
}

console.log('There are ' + count + ' number of items with kind of shopping product.')
