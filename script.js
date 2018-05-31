// Write your solutions below

// Go through the items and find all results that have kind of shopping#product. 
// Print the count of these results. 

var shop = products.items;
var count = 0;

for (i=0; i<shop.length; i++) {
    if (shop[i].kind == "shopping#product") {
        count++;
    }
}

console.log(count);

// Where else is this count information stored in the search results?
console.log("I have no idea.");


// Print the title of all items with a backorder availability in inventories.
var backOrders = [];

for (var i=0, len=products.length; i<len; i++) {
  for (var j=0, len2=items[i].length; j<len2; j++) {
    for (var k=0, len3=inventories[j].length; k<len3; k++) {
       if (inventories[j].availability == "backorder") {
        backOrders.push(items[i].title);
      }
    }
  }
}
console.log(backOrders);

// Print the title of all items with more than one image link.
for (var i=0, len=products.length; i<len; i++) {
  for (var j=0, len2=items[i].length; j<len2; j++) {
    for (var k=0, len3=images[j].length; k<len3; k++) {
       if ([j].length > 1) {
        }
     }
   }
 }
console.log([i].title);

// Print all "Canon" products in the items (careful with case sensitivity).
var can = products.items;
var canonPdts = [];

for (i=0; i<can.length; i++) {
 if (can[i].brand == "Canon") {
  canonPdts.push([i].title);
 }
}
console.log(canonPdts);


// Print all items that have an author name of "eBay" and are brand "Canon".
var can = products.items;
var canonEbay = [];

for (i=0; i<can.length; i++) {
 if (can[i].brand == "Canon" && can[i].author == "eBay") {
  canonEbay.push([i].title);
 }
}
console.log(canonEbay);

// Print all the products with their brand, price, and an image link.

var brand = [];
var price = [];
var imgLink = [];

for (var i=0, i<products.length; i++) {
  console.log("Brand: " + brand + ", Price: $" + price + ", Image: " + imgLink);
}
