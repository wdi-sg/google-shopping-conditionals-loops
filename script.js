//Go through the items and find all results that have kind of shopping#product.
//Print the count of these results.
//Where else is this count information stored in the //search results?
//products.items.currentItemCount

var count = 0;
var condition;

for (var i = 0; i < products.items.length; i++) {
  if (products.items[i].kind === 'shopping#product') {
    count ++;
  };
};

console.log(`There are ${count} shopping#product items.`);

//Print the title of all items with a backorder availability in inventories.

/*
console.log(products.items[0]['product']['inventories'][0]['availability']);
console.log(products.items[0]['product']['title']);
console.log(products.items[0]['product']['inventories'].length);
*/
console.log('Products on back order:');

for(var i = 0; i < products.items.length; i++) {
  for (var j = 0; j < products.items[i].product.inventories.length; j++) {
    if (products.items[i].product.inventories[j].availability === 'backorder') {
      console.log(products.items[i].product.title)
    }
  }
}

//Print the title of all items with more than one image link.

console.log('Products with more than 1 image:')

for(var i = 0; i < products.items.length; i++) {
  if (products.items[i].product.images.length > 1) {
    console.log(products.items[i].product.title);
  }
}

//Print all "Canon" products in the items (careful with case sensitivity).
