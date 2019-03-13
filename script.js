//for ease of checking out the structure of "products" on console
console.log(products);

//Deliverable 1
//Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?

var shoppingProductCount = 0;

for (i=0; i<products.items.length; i++) {
  if (products.items[i].kind === "shopping#product") {
    shoppingProductCount = shoppingProductCount + 1;
  }
  }
console.log("The count for 'shopping#product' is " + shoppingProductCount + ".");

// Deliverable 2
// Print the title of all items with a backorder availability in inventories.

console.log("Items with backorder inventory:");

for (i=0; i<products.items.length; i++) {
  if (products.items[i].product.inventories[0].availability === "backorder") {

  console.log("--> " + products.items[i].product.title)
  }
}

//Deliverable 3
//Print the title of all items with more than one image link.

console.log("Items with more than one image link:");

for (i=0; i<products.items.length; i++) {
  if (products.items[i].product.images.length > 1) {
  console.log("--> " + products.items[i].product.title);
  }
}

//Deliverable 4
//Print all "Canon" products in the items (careful with case sensitivity).

console.log("Canon Products:")

for (i=0; i<products.items.length; i++) {
  var itemBrand = products.items[i].product.brand
  if (itemBrand === "Canon") {
  console.log("--> " + products.items[i].product.title);
  }
}

//Deliverable 5
//Print all items that have an author name of "eBay" and are brand "Canon".

console.log("Canon Products where author name includes 'eBay':");

for (i=0; i<products.items.length; i++) {
  var itemBrand = products.items[i].product.brand
  var authorName = products.items[i].product.author.name
  if (authorName.includes ("eBay") && itemBrand === "Canon") {
  console.log("--> " + products.items[i].product.title);
  }
}
