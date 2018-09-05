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


//FURTHER SECTION

//Prompt the user for the product brand and print only those products.
//Prompt the user if they want to see only new or used items.
//Prompt the user what kind of search they want to do- search by brand or search by condition.

var userPref = prompt('Do you want search by item brand or condition?', 'brand or condition').toLowerCase();

//Then prompt the user to put in ther actual search value- (new/used for condition or brand name for brand)

if (userPref === 'brand')
  var userBrand = prompt('What brand are you looking for?').toLowerCase();
else if (userPref === 'condition')
  var userCondition = prompt('Do you prefer new or used?', 'new or used').toLowerCase();

console.log('')
console.log('User search results:')

count = 0

for(i in products.items){
  var brand = products.items[i].product.brand;
  var condition = products.items[i].product.condition;
  if ((brand.toLowerCase().indexOf(userBrand) !== -1) || (condition.toLowerCase().indexOf(userCondition) !== -1)) {
    console.log(products.items[i].product.title);
    count++;
  }
}

//Print out some special error text (e.g. "Sorry, nothing found") if there were no results.
if (count <= 0)
  console.log("Sorry, nothing found");
else
  console.log(`Total ${count} results.`)
