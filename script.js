// console.log(products);

// var searchId = "tag:google.com,2010:shopping/products/6347724/17225849483606303723";
//
// for( var i = 0; i<products.items.length; i++ ) {
//
//  //console.log( products.items[i].id);
//
//  var item = products.items[i];
//  //console.log( item.id );
//
//  console.log( item );
//
//  if( item.id === searchId ){
//   console.log( "YAYAYAYA");
//  }
// }

// Part 1 // Go through the items and find all results that have kind of shopping#product. Print the count of these results.
// Part 1 // Where else is this count information stored in the search results?
// Part 1 //
// Part 1 // var count = 0;
// Part 1 //
// Part 1 // for ( var i = 0; i < products.items.length; i++ ) {
// Part 1 //
// Part 1 //   var item = products.items[i];
// Part 1 //
// Part 1 //   if ( item.kind === "shopping#product") {
// Part 1 //       count++;
// Part 1 //   }
// Part 1 // }
// Part 1 //
// Part 1 // console.log(`Total count of shopping#product is ${count}.`);


// Part 2 // Print the title of all items with a backorder availability in inventories.
// Part 2 //
// Part 2 // for ( var i = 0; i < products.items.length; i++ ) {
// Part 2 //
// Part 2 //   var item = products.items[i];
// Part 2 //
// Part 2 //   if ( item.product.inventories[0].availability === "backorder") {
// Part 2 //
// Part 2 //       console.log(`${item.product.title} is backordered.`);
// Part 2 //   }
// Part 2 // }


// Part 3 // Print the title of all items with more than one image link.
// Part 3 //
// Part 3 // for ( var i = 0; i < products.items.length; i++ ) {
// Part 3 //
// Part 3 //   var item = products.items[i];
// Part 3 //
// Part 3 //   if ( item.product.images.length > 1) {
// Part 3 //
// Part 3 //       console.log(`${item.product.title}`);
// Part 3 //   }
// Part 3 // }


// Part 4 // Print all "Canon" products in the items (careful with case sensitivity).
// Part 4 //
// Part 4 // for ( var i = 0; i < products.items.length; i++ ) {
// Part 4 //
// Part 4 //   var item = products.items[i];
// Part 4 //
// Part 4 //   if ( item.product.brand === "Canon") {
// Part 4 //
// Part 4 //       console.log(item.product);
// Part 4 //   }
// Part 4 // }


// Part 5 // Print all items that have an author name of "eBay" and are brand "Canon".
// Part 5 //
// Part 5 // for ( var i = 0; i < products.items.length; i++ ) {
// Part 5 //
// Part 5 //   var item = products.items[i];
// Part 5 //
// Part 5 //   if ( item.product.author.name.includes("eBay") && item.product.brand === "Canon") {
// Part 5 //
// Part 5 //       console.log(item);
// Part 5 //   }
// Part 5 // }


// Part 6 // Print all the products with their brand, price, and an image link
// Part 6 //
// Part 6 // for ( var i = 0; i < products.items.length; i++ ) {
// Part 6 //
// Part 6 //   var item = products.items[i];
// Part 6 //
// Part 6 //   console.log(item.product);
// Part 6 //   console.log(`Brand: ${item.product.brand}`);
// Part 6 //   console.log(`Price: $${item.product.inventories[0].price}`);
// Part 6 //   console.log(`Image Link: ${item.product.images[0].link}`);
// Part 6 //
// Part 6 // }


// Part 7 // Prompt the user for the product brand and print only those products.

var brandInput = prompt("What is the product brand?").toLowerCase();

for ( var i = 0; i < products.items.length; i++ ) {

  var item = products.items[i];

  if ( item.product.brand.toLowerCase() === brandInput) {

      console.log(item.product);
  }
}

// Part 8 // Prompt the user if they want to see only new or used items.

// Part 9 // Prompt the user what kind of search they want to do- search by brand or search by condition.

// Part 10 // Then prompt the user to put in ther actual search value- (new/used for condition or brand name for brand)

// Part 11 // Print out some special error text (e.g. "Sorry, nothing found") if there were no results.










