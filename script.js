//Go through the items and find all results that have kind of shopping#product.
//Print the count of these results.
//Where else is this count information stored in the //search results?
//products.items.currentItemCount

var count = 0;

for (var i = 0; i < products.items.length; i++) {
  if (products.items[i].kind === 'shopping#product') {
    count ++;
  };
};

console.log('');
console.log(`1. There are ${count} shopping#product items.`);

//Print the title of all items with a backorder availability in inventories.

console.log('');
console.log('2. Products on back order:');

for(var i = 0; i < products.items.length; i++) {
  for (var j = 0; j < products.items[i].product.inventories.length; j++) {
    if (products.items[i].product.inventories[j].availability === 'backorder') {
      console.log(products.items[i].product.title)
    }
  }
}

//Print the title of all items with more than one image link.

console.log('');
console.log('3. Products with more than 1 image:');

for(var i = 0; i < products.items.length; i++) {
  if (products.items[i].product.images.length > 1) {
    console.log(products.items[i].product.title);
  }
}

//Print all "Canon" products in the items (careful with case sensitivity).

console.log('');
console.log('4. Products of Canon Brand:');

for(var i = 0; i < products.items.length; i++) {
  //console.log(products.items[i].product.brand);
  if (products.items[i].product.brand === 'Canon') {
    console.log(products.items[i].product.title);
  }
}

//Print all items that have an author name of "eBay" and are brand "Canon".

console.log('');
console.log('5. Canon Products from eBay:');

for(var i = 0; i < products.items.length; i++) {
  //console.log(products.items[i].product.brand);
  if (products.items[i].product.brand === 'Canon' && products.items[i].product.author.name.indexOf('eBay') !== -1) {
    console.log(products.items[i].product.title);
  }
}

//Print all the products with their brand, price, and an image link

console.log('');
console.log('6. Products Listing:');
for(i in products.items) {
  var brand = products.items[i].product.brand;
  var imageLink = products.items[i].product.images[0].link;
  for (j in products.items[i].product.inventories) {
    var price = products.items[i].product.inventories[j].price;
  }
  console.log(`Brand: ${brand}, Price: ${price}, Image: ${imageLink}`);
}

//Prompt the user for the product brand and print only those products.
//Prompt the user if they want to see only new or used items.

console.log('')
console.log('User search results:')

var userBrand = prompt('What brand are you looking for?').toLowerCase();
var userCondition = prompt('Do you prefer new or used?', 'new or used').toLowerCase();

for(i in products.items){
  var brand = products.items[i].product.brand;
  var condition = products.items[i].product.condition;
  if ((brand.toLowerCase().indexOf(userBrand) !== -1) && (condition.toLowerCase().indexOf(userCondition) !== -1))
    console.log(products.items[i].product.title);
}
