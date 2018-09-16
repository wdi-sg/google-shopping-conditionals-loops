//Part 1a: Go through items and find all results that have kind of shopping#product.
var count = 0;
//console.log(products.items);
//console.log("number of items: " + products.items.length);

for (var index = 0; index < products.items.length; index++) {
  console.log(index);
  var item = products.items[index];
  console.log( item.kind ) ;

//Part 1a: Find all items that have kind of shopping#product. Print count.
  if (item.kind === "shopping#product") {
    count++;
    console.log( count );
  }
    console.log(count++);
}
console.log(`No of items that have kind of shopping#product: ${count}.`);

//Part 1b: Print the title of all items with 'backorder' availability in 'inventories'.
for (index = 0; index < products.items.length; index++) {
  var item = products.items[index];

  if (item.product.inventories[0].availability === "backorder") {
     console.log(`Items with backorder availability in inventories: ${item.product.title}.`);
  }
}

//Part 1c: Print the title of al items with more than 1 image link.
for (index = 0; index < products.items.length; index++) {
  var item = products.items[index];

  if (item.product.images.length > 1) {
    console.log(`Items with more than 1 image link: ${item.product.title}.`);
  }
}

//Part 1d: Print all Canon products in the items.
for (index = 0; index < products.items.length; index++) {
  var item = products.items[index];
  var itemBrand = item.product.brand.toLowerCase();

  if (itemBrand === "canon") {
    console.log(`Items with Canon product brand: ${item}.`);
  }
}

//Print all items with an author name of "eBay" and are brand "Cannon".
for (index = 0; index < products.items.length; index++) {
  var item = products.items[index];
  var author = item.product.author.name.toLowerCase();
  var itemBrand = item.product.brand.toLowerCase();

  if (author === "ebay" && itemBrand === "canon") {
    console.log(`Items with eBay author & Canon brand: ${item}.`);
  }
}

//Print all products with their brand, price and an image link.
for (index = 0; index < products.items.length; index++) {
  var item = products.items[index];
  var itemBrand = item.product.brand.toLowerCase();
  var itemPrice = item.product.inventories[0].price;
  var itemImage = item.product.images[0].link;

  console.log(`Brand, price & image link:  ${itemBrand}, ${itemPrice}, ${itemImage}.`);
}

//Prompt the user for the product brand and print only those products.
var brandPrompt = prompt("What brand of product would you like?");

for (index = 0; index < products.items.length; index++) {
  var item = products.items[index];
  var itemBrand = item.product.brand.toLowerCase();

  if (brandPrompt === item.product.brand) {
    console.log(`Here are items in the brand you are looking for: ${item.product[i]}.`);
  }
}

//Prompt the user to see if they want only new or used items.
var itemCondition = prompt("Would you like to see new or used items?");
for (index = 0; index < products.items.length; index++) {
  var item = products.items[index];
  if (itemCondition === "new") {
  console.log(`Here are items in the brand you are looking for: ${item.id}.`);
  }
}




