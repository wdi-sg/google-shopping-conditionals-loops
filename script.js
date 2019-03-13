//for ease of checking out the structure of "products" on console, do
//console.log(products);

//Deliverable 1
//Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?

var shopProductCount = 0;

for (i=0; i<products.items.length; i++) {
  var shopProductKind = products.items[i].kind
  if (shopProductKind === "shopping#product") {
    shopProductCount = shopProductCount + 1;
  }
  }
console.log("The count for 'shopping#product' is " + shopProductCount + ".");

// Deliverable 2
// Print the title of all items with a backorder availability in inventories.

console.log("Items with backorder inventory:");

for (i=0; i<products.items.length; i++) {
  var inventoryAvail = products.items[i].product.inventories[0].availability
  if (inventoryAvail === "backorder") {

  console.log("--> " + products.items[i].product.title)
  }
}

//Deliverable 3
//Print the title of all items with more than one image link.

console.log("Items with more than one image link:");

for (i=0; i<products.items.length; i++) {
  var imageLinksNumber = products.items[i].product.images.length
  if (imageLinksNumber > 1) {
  console.log("--> " + products.items[i].product.title);
  }
}

//Deliverable 4
//Print all "Canon" products in the items (careful with case sensitivity).

console.log("Canon products:")

for (i=0; i<products.items.length; i++) {
  var itemBrand = products.items[i].product.brand
  if (itemBrand === "Canon") {
  console.log("--> " + products.items[i].product.title);
  }
}

//Deliverable 5
//Print all items that have an author name of "eBay" and are brand "Canon".

console.log("Canon products where author name includes 'eBay':");

for (i=0; i<products.items.length; i++) {
  var authorName = products.items[i].product.author.name
  var itemBrand = products.items[i].product.brand
  if (authorName.includes ("eBay") && itemBrand === "Canon") {
  console.log("--> " + products.items[i].product.title);
  }
}

//Deliverable 6
//Print all the products with their brand, price, and an image link

console.log("Product details (Brand, Price, Image Link):");

for (i=0; i<products.items.length; i++) {
//  var productTitle = products.items[i].product.title;
  var itemBrand = products.items[i].product.brand;
  var itemPrice = products.items[i].product.inventories[0].price;
  var imageLink = products.items[i].product.images[0].link;
  console.log("--> " + /*productTitle + ", " + */itemBrand + ", " + itemPrice + ", " + imageLink);
}

// Further exercises?
// Some other day.
