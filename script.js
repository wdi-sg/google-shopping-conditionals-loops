//console.log("hello")
var total = 0;
for (i=0; i<products.items.length; i++) {
 if (products.items[i].kind === 'shopping#product') {
   total = total++;
 }
}
console.log("Number of products " + products.items.length);

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
