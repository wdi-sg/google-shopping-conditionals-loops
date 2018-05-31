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



// // Print the title of all items with a backorder availability in inventories.
  //create "get" variable
var get = (p, o) =>
  p.reduce((xs, x) =>
    (xs && xs[x]) ? xs[x] : null, o)

  //create backOrders blank array
var backOrders = [];

  //point to products>items>inventories>availability
var avail = get(['items', 'inventories', 'availability'], products)
for (j=0; j<avail.length; j++) {
  //identify items on backorder.
if avail = "backorder" {
    }
  }
 
  //use .push to add title of backorder item to backOrders array.

console.log(backOrders[]);

// Print the title of all items with more than one image link.


// Print all "Canon" products in the items (careful with case sensitivity).
var canons = products.items;
var canonProducts = [];
  //code to target canon products here
for (i=0; i<shop.length; i++) {
    if (shop[i].brand == "Canon") {
     canonProducts.push(canons)
    }
}

document.write(count);

// Print all items that have an author name of "eBay" and are brand "Canon".


// Print all the products with their brand, price, and an image link.