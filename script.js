// Go through the items and find all results that have kind of shopping#product. Print the count of these results.

var counter = products.items.length;
console.log(counter);

// Where else is this count information stored in the search results?

console.log(products.itemsPerPage);
console.log(products.currentItemCount);

// Print the title of all items with a backorder availability in inventories.

for (var i = 0; i < 25; i++) {
  if (products.items[i].product.inventories[0].availability === "backorder")
    console.log("This item " + products.items[i].product.title + " currenty unavailable.");
}

// Print the title of all items with more than one image link.

for (var j = 0; j < 25; j++) {
  if (products.items[j].product.images.length > 2)
    console.log("This item " + products.items[j].product.title + " has more than 1 image link.");
}

// Print all "Canon" products in the items (careful with case sensitivity).

for (var n = 0; n < 25; n++) {
  if (products.items[n].product.brand == "Canon")
    console.log("This is " + products.items[n].product.title + ".");
}

// Print all items that have an author name of "eBay" and are brand "Canon".

for (var m = 0; m < 25; m++) {
  if ((products.items[m].product.brand == "Canon") && (products.items[m].product.author.name == "eBay"))
    console.log("This is " + products.items[m].product.title + ".");
}

// Print all the products with their brand, price, and an image link

var itemBrand = products.items.product.brand;
console.log(itemBrand);
