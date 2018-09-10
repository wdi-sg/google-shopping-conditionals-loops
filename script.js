Go through the items and find all results that have kind of shopping#product.

// 1a. Count # of kind of shopping#product
var count = 0

for (var i = 0; i < products.items.length; i++) {
  if (products.items[i].kind === 'shopping#product') {
    count++;
  }
}
//1b. Print the count of these results.
console.log("There are" + " " + count + " " + "shopping#product items.");

// 1c. Where else is this count information stored in the search results?

 The count information is also stored in the following search results:
 a. products.currentItemCount,
 b. products.itemsPerPage

// 2. Print the title of all items with a backorder availability in inventories.

for (var i = 0; i < products.items.length; i++) {
  if (products.items[i].product.inventories[0].availability === "backorder")
    console.log(products.items[i].product.title);
}

// 3. Print the title of all items with more than one image link.

for (var i = 0; i < products.items.length; i++) {
  if (products.items[i].product.images.length > 0) {
    console.log(products.items[i].product.title);
  }

// 4. Print all "Canon" products in the items (careful with case sensitivity - WHAT DOES THIS MEAN? CAN I USE "==").

for (var i = 0; i < products.items.length; i++) {
  if (products.items[i].product.brand == "Canon" ) {
    console.log(products.items[i].product.title);
  }
}

// 5. Print all items that have an author name of "eBay" and are brand "Canon". CAN WE USE == INSTEAD OF ===?
for (var i = 0; i < products.items.length; i++) {
  if (products.items[i].product.brand == "Canon" && products.items[i].product.author.name.indexOf('eBay') ===  {
    console.log(products.items[i]);
  }


// 7. Print all the products with their brand, price, and an image link

var i = 0;
while (i < products.items.length) {
  console.log(products.items[i].product.brand);
  console.log(products.items[i].product.inventories[0].price );
  console.log(products.items[i].product.images[0].link);
  console.log('\n')
  i++;
}

