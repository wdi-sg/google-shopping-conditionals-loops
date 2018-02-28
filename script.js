//q1
var count = 0;
products.items.forEach(function(item) {
  if (item.kind == 'shopping#product') {
    console.log(item);
    count++;
  }
})
console.log('Total:' + count);

//q2
products.items.forEach(function(item) {
  if (item.product.inventories[0].availability == 'backorder') {
    console.log(item.product.title);
  }
})

//q3
products.items.forEach(function(item) {
  if (item.product.images.length > 1) {
    console.log(item.product.title);
  }
})

//q4
products.items.forEach(function(item) {
  if (item.product.brand.toLowerCase() == 'canon') {
    console.log(item.product.title);
  }
})

//q5
products.items.forEach(function(item) {
  if (item.product.author.name == 'eBay' && item.product.brand.toLowerCase() == 'canon') {
    console.log(item.product.title);
  }
})

// q6
products.items.forEach(function(item) {
  console.log('Brand:' + item.product.brand + ', Price:' + item.product.inventories[0].price + ', Image Link:' + item.product.images[0].link);
})
