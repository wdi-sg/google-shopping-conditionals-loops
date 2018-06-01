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
  


// Print the title of all items with a backorder availability in inventories.
for (var i=0; i<shop.length; i++); {
  if (shop[i].product.inventories[0].availability === "backorder"); {
    console.log(shop[i].product.title);
  }
}

// Print the title of all items with more than one image link.


// Print all "Canon" products in the items (careful with case sensitivity).
for (var i=0; i<shop.length; i++) {
  if (shop[i].product.brand.toLowerCase() === "canon"); {
    console.log(shop[i].product.title);
  }
}
  
// Print all items that have an author name of "eBay" and are brand "Canon".
//look for other methods to find ebay besides '.include', eg. indexOf.
for (i=0; i<shop.length; i++) {
 if (shop[i].product.brand.toLowerCase() === "canon" && shop[i].product.author.toLowerCase().include("ebay")) {
  console.log(shop[i].product.title);
  }
}

// Print all the products with their brand, price, and an image link.
function getByBrands(brand) {
  for (i=0; i<shop.length; i++) {
    console.log(shop[i].product.brand);
    console.log(shop[i].product.inventories[0].price);
    console.log(shop[i].images[0]); 
  }
}