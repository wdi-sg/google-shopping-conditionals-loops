// 25 shopping#product

console.log("1. Go through the items and find all results that have kind of shopping#product. Print the count of these results. Where else is this count information stored in the search results?");
var total = 0;
for (i=0; i<products.items.length; i++) {
  if (products.items[i].kind === "shopping#product") {
    total = total += 1;
  }
}
console.log("Number of products " + total);

// products - items[i] - product - inventories[0] - availability
console.log("2. Print the title of all items with a backorder availability in inventories.");
for (i=0; i<products.items.length; i++) {
  if (products.items[i].product.inventories[0].availability === 'backorder') {
    var print = products.items[i].product.title;
    console.log(print);
  }
}

// products - items[i] - product - images
console.log("3. Print the title of all items with more than one image link.");
for (i=0; i<products.items.length; i++) {
  if (products.items[i].product.images.length > 1) {
    var print = products.items[i].product.title;
    console.log(print);
  }
}

// products - items[i] - product - brand
console.log("4. Print all 'Canon' products in the items (careful with case sensitivity).");
for (i=0; i<products.items.length; i++) {
  if (products.items[i].product.brand === "Canon") {
    var print = products.items[i].product.title;
    console.log(print);
  }
}

// products - items[i] - product - brand && products - items[i] - product - author - name
console.log('5. Print all items that have an author name of "eBay" and are brand "Canon".');
for (i=0; i<products.items.length; i++) {
  if ((products.items[i].product.brand === "Canon") && (products.items[i].product.author.name.includes("eBay"))) {
    var print = products.items[i].product.title;
    console.log(print);
  }
}

console.log("6. Print all the products with their brand, price, and an image link");
for (i=0; i<products.items.length; i++) {
  for (j=0; j<products.items[i].product.images.length; j++) {
    var print = products.items[i].product.brand;
    var print2 = products.items[i].product.inventories[0].price;
    var print3 = products.items[i].product.images[j].link;
    console.log(print + " " + print2 + " " + print3);
  }
}
