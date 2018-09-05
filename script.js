//Go through the items and find all results that have kind of shopping#product.
//Print the count of these results.
//Where else is this count information stored in the //search results?
//items.currentItemCount

var count = 0;
var items = products.items;
var inventories, availability;
var brand, condition, title, name, imageLink, price;
var userPref, userBrand, userCondition;

for (var i = 0; i < items.length; i++) {

  if (items[i].kind === 'shopping#product') {
    count ++;
  };
};

console.log (`1. There are ${count} shopping#product items.`);

//Print the title of all items with a backorder availability in inventories.

console.log ('');
console.log ('2. Products on back order:');

for (var i = 0; i < items.length; i++) {
  inventories = items[i].product.inventories;

  for (var j = 0; j < inventories.length; j++) {
    availability = inventories[j].availability;
    title = items[i].product.title;

    if (availability === 'backorder') {
      console.log(title);
    }
  }
}

//Print the title of all items with more than one image link.

console.log('');
console.log('3. Products with more than 1 image:');

for (var i = 0; i < items.length; i++) {

  if (items[i].product.images.length > 1) {
    console.log(items[i].product.title);
  }
}

//Print all "Canon" products in the items (careful with case sensitivity).

console.log('');
console.log('4. Products of Canon Brand:');

for (var i = 0; i < items.length; i++) {
  brand = items[i].product.brand;
  title = items[i].product.title;

  if (brand === 'Canon') {
    console.log(title);
  }
}

//Print all items that have an author name of "eBay" and are brand "Canon".

console.log('');
console.log('5. Canon Products from eBay:');

for (var i = 0; i < items.length; i++) {
  brand = items[i].product.brand;
  name = items[i].product.author.name;
  title = items[i].product.title;

  if (brand === 'Canon' && name.indexOf('eBay') !== -1) {
    console.log(title);
  }
}

//Print all the products with their brand, price, and an image link

console.log('');
console.log('6. Products Listing:');
for (i in items) {
  brand = items[i].product.brand;
  imageLink = items[i].product.images[0].link;

  for (j in items[i].product.inventories) {
    price = items[i].product.inventories[j].price;
  }

  console.log(`Brand: ${brand}, Price: ${price}, Image: ${imageLink}`);
}


//FURTHER SECTION

//Prompt the user for the product brand and print only those products.
//Prompt the user if they want to see only new or used items.
//Prompt the user what kind of search they want to do- search by brand or search by condition.

userPref = prompt('Do you want search by item brand or condition?', 'brand or condition').toLowerCase();

//Then prompt the user to put in ther actual search value- (new/used for condition or brand name for brand)

if (userPref === 'brand')
  userBrand = prompt('What brand are you looking for?').toLowerCase();
else if (userPref === 'condition')
  userCondition = prompt('Do you prefer new or used?', 'new or used').toLowerCase();
else
  userPref = 'error';

console.log('')
console.log('User search results:')

count = 0

for (i in items) {

  brand = items[i].product.brand;
  condition = items[i].product.condition;
  title = items[i].product.title;

  if ((brand.toLowerCase().indexOf(userBrand) !== -1) || (condition.toLowerCase().indexOf(userCondition) !== -1)) {
    console.log(title);
    count++;
  }
}

//Print out some special error text (e.g. "Sorry, nothing found") if there were no results.

if (count <= 0 && userPref !== 'error')
  console.log("Sorry, nothing found");
else if (userPref === 'error')
  console.log('Invalid input detected!')
else
  console.log(`Total ${count} results.`)
